import {
    Controller,
    Get,
    Post,
    Body,
    Headers,
    Param,
    Query, UnauthorizedException, UseGuards, Req, ValidationPipe, Inject,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {VerifyEmailDto} from "./dto/verify-email.dto";
import {UserLoginDto} from "./dto/login-info.dto";
import {UserInfo} from "./interface/user-info";
import {AuthService} from "../module/auth/auth.service";
import {AuthGuard} from "../guard/authguard";
import {UserAuth} from "../decorator/user-auth";
import {Logger as WinstonLogger} from "winston"
import {WINSTON_MODULE_PROVIDER} from "nest-winston";
import {CommandBus, ICommand} from "@nestjs/cqrs";

export class CreateUserCommand implements ICommand {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) {
    }
}

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
        private commandBus: CommandBus,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger
    ) {
    }

    @Post("/cqrs")
    async createUser_cqrs(@Body() dto: CreateUserDto): Promise<void> {
        const { name, email, password } = dto;
        const command  = new CreateUserCommand(name, email , password);
        return this.commandBus.execute(command) // 이전에 정의한 CreateUserCommand를 전송
    }

    // CMD :: curl -X POST  http://localhost:3000/users/create -H "Content-Type: application/json" -d '{"name": "name_example12", "email":"email12@example.com","password":"1234","id":"id11"}'
    @Post('/create')
    async createUser(@Body() dto: CreateUserDto): Promise<any> {
        // return this.usersService.create(createUserDto);
        this.printWinstonLog(dto)


        const {name, email, password} = dto;
        const res = await this.usersService.createUser(name, email, password);
        console.log('createUser::: ', res)
    }

    private printWinstonLog(dto) {
        this.logger.error('Error: ', dto)
        this.logger.warn('Error: ', dto)
        this.logger.info('info: ', dto)
        this.logger.http('http: ', dto)
        this.logger.verbose('verbose: ', dto)
        this.logger.debug('debug: ', dto)
        this.logger.silly('silly: ', dto)
        // [MyApp] Error   1/17/2023, 12:22:02 PM Error:  - {
        //   name: 'name_example12',
        //   email: 'email1243@example.com',
        //   password: '1234',
        //   id: 'id11'
        // }
        // => 이런식으로 노출
    }


    // 결과 예시 curl 로 구현
    // curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"example name", "email":"example@gmail.com"}'
    // 유저를 생성했습니다. {"name":"example name","email":"example@gmail.com"}%

    // Description:: 이메일 인증
    // CMD:: curl -X POST  http://localhost:3000/users/email-verify -H "Content-Type: application/json" -d '{"name": "name_example", "email":"email@example.com","password":"1234"}'
    @Post('/email-verify')
    async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
        const {signupVerifyToken} = dto;
        console.log('dto check:: ', JSON.stringify(dto))
        return await this.usersService.verifyEmail(signupVerifyToken);
    }


    // Description:: 로그인
    // CMD:: curl -X POST  http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"name": "name_example", "email":"email@example.com","password":"1234"}
    // CMD:: curl -X POST  http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email":"email@example.com","password":"1234"}
    // RESULT:: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwiaWQiOiIwMUdQMzZNRjFaMTZBRFEzQzAwUzc4V0ZUWCIsIm5hbWUiOiJuYW1lX2V4YW1wbGUiLCJpYXQiOjE2NzM0MzU2MzYsImV4cCI6MTY4MjA3NTYzNiwiYXVkIjoiZXhhbXBsZS5jb20iLCJpc3MiOiJleGFtcGxlLmNvbSJ9.Fc_MBl6m1YIo1keV4zp0HU9oC_0dArXOc-_Qzw5pdgc%
    @Post('/login')
    async login(@Body() dto: UserLoginDto): Promise<string> {
        const {email, password} = dto;
        return await this.usersService.login(email, password)
    }


    // @Get('/origin')
    // findAll()  {
    //   return this.usersService.findAll();
    // }
    //
    //
    // @Get('/origin/:id')
    // findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    //   // if(+id < 1){
    //   //   //문자로 받은 id앞에 +붙여주면, 숫자로 변환
    //   //   throw new BadRequestException('id값은 0보다 큰 값이어야 합니다.')
    //   // }
    //   return this.usersService.findOne(+id);
    // }

    // Description:: 유저 정보 조회
    // CMD:: curl -X POST  http://localhost:3000/users/3
    // CMD:: curl -X GET  http://localhost:3000/users/01GP36MF1Z16ADQ3C00S78WFTX -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwiaWQiOiIwMUdQMzZNRjFaMTZBRFEzQzAwUzc4V0ZUWCIsIm5hbWUiOiJuYW1lX2V4YW1wbGUiLCJpYXQiOjE2NzM0MzU2MzYsImV4cCI6MTY4MjA3NTYzNiwiYXVkIjoiZXhhbXBsZS5jb20iLCJpc3MiOiJleGFtcGxlLmNvbSJ9.Fc_MBl6m1YIo1keV4zp0HU9oC_0dArXOc-_Qzw5pdgc"
    // RES: {"email":"email@example.com","id":"01GP36MF1Z16ADQ3C00S78WFTX","name":"name_example"}%
    // CMD:: curl -X GET  http://localhost:3000/users/3 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwiaWQiOiIwMUdQMzZNRjFaMTZBRFEzQzAwUzc4V0ZUWCIsIm5hbWUiOiJuYW1lX2V4YW1wbGUiLCJpYXQiOjE2NzM0MzU2MzYsImV4cCI6MTY4MjA3NTYzNiwiYXVkIjoiZXhhbXBsZS5jb20iLCJpc3MiOiJleGFtcGxlLmNvbSJ9.Fc_MBl6m1YIo1keV4zp0HU9oC_0dArXOc-_Qzw5pdgc"
    // ERR: {"statusCode":404,"message":"유저가 존재하지 않습니다. ","error":"Not Found"}
    // CMD:: curl -X GET  http://localhost:3000/users/0sw -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIiwiaWQiOiIwMUdQMzZNRjFaMTZBRFEzQzAwUzc4V0ZUWCIsIm5hbWUiOiJuYW1lX2V4YW1wbGUiLCJpYXQiOjE2NzM0MzU2MzYsImV4cCI6MTY4MjA3NTYzNiwiYXVkIjoiZXhhbXBsZS5jb20iLCJpc3MiOiJleGFtcGxlLmNvbSJ9.Fc_MBl6m1YIo1keV4zp0HU9oC_0dArXOc-_Qzw5pdgc"
    // RES: {"email":"email@example.com","id":"01GP36MF1Z16ADQ3C00S78WFTX","name":"name_example"}%
    @UseGuards(AuthGuard)
    @Get('/:id')
    // @Get('/:id)
    async getUserInfo(
        // @Headers() headers: any, //  => 추가 수정: 여기서 더이상 사용안하고, AuthGuard에서 verify해줌으로 주석처리
        // @Req() req: any
        // => 수정: req.user를 매서드 내부에서 직접 가져다 사용해도 되지만, 아래와 같이 인수로 직접 받을 수 있다.
        @UserAuth() user: UserInfo
        // @UserAuth(new ValidationPipe({ validateCustomDecorators: true})) user: UserInfo // => 이런식으로, 받은 req.user에 대한 유효성 검사를 진행할 수 있다. (지금 필요 X)

        // @Param('id') userId: string
    ): Promise<UserInfo> {
        // => Moved below lines to auth.guard.ts
        // const jwtString = headers?.authorization.split('Bearer')[1].trim()
        // const {userId, email} = this.authService.verify(jwtString)
        // if(!userId){
        //     throw new UnauthorizedException('Cannot find correct jwt')
        // }
        // }
        return await this.usersService.getUserInfo(user.id)
    }

    @UseGuards(AuthGuard)
    @Get('/pipe/:id')
    // @Get('/:id)
    async getUserInfo_pipe(
        @Headers() headers: any,
        @UserAuth() user: UserInfo
    ): Promise<UserInfo> {
        console.log('request:: ', user)
        return await this.usersService.getUserInfo(user.id)
    }


    //
    // //커스텀 Header: @Header데커레이터를 사용 (혹은, res.header()로 직접 설정 가능)
    // @Header('key', "value")
    // @Get('header/:id')
    // findOne_Header(@Param('id') id: string) {
    //   if(+id < 1){
    //     //문자로 받은 id앞에 +붙여주면, 숫자로 변환
    //     throw new BadRequestException('id값은 0보다 큰 값이어야 합니다.')
    //   }
    //   return this.usersService.findOne(+id);
    // }
    //
    // @Get('redirect/:id')
    // @Redirect('https://nestjs.com', 301)
    // findOne_Redirect(@Param('id') id: string) {
    //   if(+id < 1){
    //     //문자로 받은 id앞에 +붙여주면, 숫자로 변환
    //     throw new BadRequestException('id값은 0보다 큰 값이어야 합니다.')
    //   }
    //   return this.usersService.findOne(+id);
    // }
    //
    // // Query 매개변수로, 버전 숫자를 전달받아 해당 버전의 페이지로 이동시,
    // @Get('redirect/docs')
    // // @Redirect('https://docs.nestjs.com', 302)
    // example_Redirect(@Query('version') version) {
    //   if(version && +version === 5)
    //     // version이 있고, 그 version이 5인 경우에만 이동.
    //     return {
    //       url: 'http://docs.nestjs.com/v5/'
    //     }
    // }
    // // Routing:
    // @Get(':userId/memo/:memoId')
    // getUserMemo(
    //     @Param('userId') userId: string,
    //     @Param('memoId') memoId: string
    // ) {
    //   return `userId : ${userId}, memoId : ${memoId}`
    // }
    //
    //
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this.usersService.update(+id, updateUserDto);
    // }
    //
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.usersService.remove(+id);
    // }
}


import {
    Controller,
    Get,
    Post,
    Body,
    Headers,
    Param,
    Query, UnauthorizedException, UseGuards,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {VerifyEmailDto} from "./dto/verify-email.dto";
import {UserLoginDto} from "./dto/login-info.dto";
import {UserInfo} from "./interface/user-info";
import {AuthService} from "../module/auth/auth.service";
import {AuthGuard} from "../guard/authguard";


@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {
    }


    @Post('/create')
    async createUser(@Body() dto: CreateUserDto): Promise<any> {
        // return this.usersService.create(createUserDto);
        const {name, email, password} = dto;
        const res = await this.usersService.createUser(name, email, password);
        console.log('createUser::: ', res)
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
    @UseGuards(AuthGuard)
    @Get('/:id')
    // @Get('/:id)
    async getUserInfo(
        @Headers() headers: any,
        @Param('id') userId: string
    ): Promise<UserInfo> {
        // const jwtString = headers?.authorization.split('Bearer')[1].trim()
        // const {userId, email} = this.authService.verify(jwtString)
        // if(!userId){
        //     throw new UnauthorizedException('Cannot find correct jwt')
        // }
        return await this.usersService.getUserInfo(userId)
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

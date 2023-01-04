import {Request} from 'express';
import {
    Controller,
    Get,
    Req,
    Post,
    Param,
    ParseIntPipe,
    HttpStatus,
    Query,
    DefaultValuePipe,
    Body
} from '@nestjs/common';
import {AppService} from './app.service';
import {request} from "express";
import {EmailService} from "./email/email.service";

// Nest가 제공하는 ConfigModule은 .env파일에서 읽어온 환경 변수 값을 가져오는 provider인 ConfigService가 있음.
import {ConfigService} from "@nestjs/config";
import {UsersService} from "./users/users.service";
// import {ValidationPipe} from "./pipe/validation/validation.pipe";
import { ValidationPipe } from "@nestjs/common";

import {CreateUserDto} from "./users/dto/create-user.dto";

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly emailService: EmailService,
        private readonly usersService: UsersService,
        private readonly configService: ConfigService) {
    }


    @Get('/db-host-config')
    getDatabaseHostFromConfigService(): string {
        return this.configService.get('DATABASE_HOST')
    }

    //와일드카드: 아래와 같이 와일드 카드를 사용해서 라우팅 패스를 작성할 수 있다.
    @Get('/ho*')
    getHello2(): string {
        return this.appService.getHello();
    }

    @Get()
    // 경로중에 / 는 생략할 수 있다.
    basic(): string {
        return 'Example';
    }

    @Get('/hello')
    // 경로중에 / 는 생략할 수 있다.
    getHello(): any {
        console.log('Hello::: ', process.env.DATABASE_HOST)
        // return this.appService.getHello();
        return process.env.DATABASE_HOST
    }

    // CMD:: curl -X GET http://localhost:3000/origin
    // RESULT:: This action returns all users offset:: 0 & limit:: 10%
    @Get('/origin')
    findAll(
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
    ) {
        return this.usersService.findAll(offset, limit);
    }

    // CMD:: curl -X GET http://localhost:3000/origin/22
    // RESULT:: This action returns a #22 user%
    @Get('/origin/:id')
    findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
        // if(+id < 1){
        //   //문자로 받은 id앞에 +붙여주면, 숫자로 변환
        //   throw new BadRequestException('id값은 0보다 큰 값이어야 합니다.')
        // }
        return this.usersService.findOne(+id);
    }

    // CMD:: curl -X GET http://localhost:3000/origin/pipe/23
    // RESULT:: This action returns a #22 user%
    // CONSOLE:: { metatype: [Function: Number], type: 'param', data: 'id' }
    @Get('/origin/pipe/:id')
    findOne_validationPipe(@Param('id', ValidationPipe) id: number) {
        return this.usersService.findOne(+id);
    }

    // CMD:: curl -X GET http://localhost:3000/origin/pipe/23
    // RESULT:: This action returns a #22 user%
    @Post('/origin/create')
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }



    // 요청 객체: NestJs는 req와 함께 전달되는 데이터를 핸들러(요청을 처리할 구성 요소, 컨트롤러가 이 역할을 함)이 다룰수 있는 객체로 변환
    // 요청 객체는 HTTP 요청을 의미한다.
    // 요청 객체(req)가 어떻게 구성요소로는 쿼리 스트링, 매개변수, 헤더, 바디 등 다양한 정보를 가지고 있지만 대부분 decorators (@Query(), @Param, @Body 등)을 사용해 처리한다.
    @Get('/hello3')
    getHello3(@Req() req: Request): string {
        // console.log(req)
        return this.appService.getHello();
    }


}

import {Request} from 'express';
import {Controller, Get, Req, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {request} from "express";
import {EmailService} from "./email/email.service";

// Nest가 제공하는 ConfigModule은 .env파일에서 읽어온 환경 변수 값을 가져오는 provider인 ConfigService가 있음.
import {ConfigService} from "@nestjs/config";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly emailService: EmailService, private readonly configService: ConfigService) {
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

    @Get('/db-host-config')
    getDatabaseHostFromConfigService(): string {
      return this.configService.get('DATABASE_HOST')
    }

    //와일드카드: 아래와 같이 와일드 카드를 사용해서 라우팅 패스를 작성할 수 있다.
    @Get('/ho*')
    getHello2(): string {
        return this.appService.getHello();
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
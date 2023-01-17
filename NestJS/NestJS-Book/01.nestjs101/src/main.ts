import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
// import { ValidationPipe } from "./pipe/validation/validation.pipe";
import {ValidationPipe} from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as path from 'path';
import {LoggerMiddleware_Global} from "./middleware/logger.middleware";
import {AuthGuard} from "./guard/authguard";
import * as process from "process";
import {LoggerService} from "./logger/logger.service";
import {WINSTON_MODULE_PROVIDER} from "nest-winston";

// dotenv.config({
//   path: path.resolve(
//       (process.env.NODE_ENV === 'production') ? './env/.production.env'
//           :(process.env.NODE_ENV === 'stage') ? './env/.stage.env' : './env/.development.env'
//   )
// })

// console.log(`ENV CHECK:::: ${ '/Users/heath/Desktop/personal_work/NestJS/NestJS-Book/01.nestjs101/env/.development.env' === path.resolve('./env/.development.env')}` )
// console.log(`ENV CHECK:::: ${path.resolve('./env/.development.env')}` )

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: process.env.NODE_ENV === 'production'
            ? ['error','warn','log'] // 여기 노출되는 logger만 보여지게 실행
            : ['error','warn','log','verbose','debug'] // 여기 노출되는 logger만 보여지게 실행
    });
    // ValidationPipe를 모든 핸들러에 일일이 지정하지 않고, 전역으로 설정하려면 부트스트랩 과정에서 적용 => nest에 이미 validation-pipe가 있기 때문에 직접 만들필요 X
    // app.useGlobalPipes(new ValidationPipe())

    // Pipes 사용: class-transformer를 사용하기 위해서는 transform: true값 지정옴
    // app.useGlobalPipes(new ValidationPipe({
    //     transform: true
    // }))
    // Middleware::
    // app.use(LoggerMiddleware_Global); // 전역으로 사용할 경우, class가 아닌, function으로 사용
    // 이유: const app = await NestFactory.create(AppModule)는 use()가 사용된 클래스를 인수로 받을 수 없음
    // Guard 전역 사용: 여기 등록후, Module 에 등록
    // app.useGlobalGuards(new AuthGuard())

    // Guard is used for Authorization (인가) => permission
    // Middleware is called only before the route handler is called. You have access to the response object, but you don't have the result of the route handler.
    // Interceptors have access to response/request before and after the route handler is called.
    // Exception Filters are called after the route handler and after the interceptors.
    // Middleware -> Interceptors -> Route Handler -> Interceptors -> Exception Filter

    // Global Use of Logger::
    // app.useLogger(app.get(LoggerService))
    // app.useLogger(app.get(WINSTON_MODULE_PROVIDER))

    await app.listen(3000);

}

bootstrap();

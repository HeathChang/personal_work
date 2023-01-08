import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
// import { ValidationPipe } from "./pipe/validation/validation.pipe";
import {ValidationPipe} from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as path from 'path';
import {LoggerMiddleware_Global} from "./middleware/logger.middleware";

// dotenv.config({
//   path: path.resolve(
//       (process.env.NODE_ENV === 'production') ? './env/.production.env'
//           :(process.env.NODE_ENV === 'stage') ? './env/.stage.env' : './env/.development.env'
//   )
// })

// console.log(`ENV CHECK:::: ${ '/Users/heath/Desktop/personal_work/NestJS/NestJS-Book/01.nestjs101/env/.development.env' === path.resolve('./env/.development.env')}` )
// console.log(`ENV CHECK:::: ${path.resolve('./env/.development.env')}` )

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // ValidationPipe를 모든 핸들러에 일일이 지정하지 않고, 전역으로 설정하려면 부트스트랩 과정에서 적용 => nest에 이미 validation-pipe가 있기 때문에 직접 만들필요 X
    // app.useGlobalPipes(new ValidationPipe())

    // class-transformer를 사용하기 위해서는 transform: true값 지정
    app.useGlobalPipes(new ValidationPipe({
        transform: true
    }))
    // app.use(LoggerMiddleware_Global); // 전역으로 사용할 경우, class가 아닌, function으로 사용
    // 이유: const app = await NestFactory.create(AppModule)는 use()가 사용된 클래스를 인수로 받을 수 없음
    await app.listen(3000);
}

bootstrap();

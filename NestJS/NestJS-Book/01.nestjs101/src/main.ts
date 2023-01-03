import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "./pipe/validation/validation.pipe";
import * as dotenv from 'dotenv';
import * as path from 'path';

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
  // ValidationPipe를 모든 핸들러에 일일이 지정하지 않고, 전역으로 설정하려면 부트스트랩 과정에서 적용
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();

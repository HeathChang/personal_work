import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {ApiController} from './api/api.controller';
// import { EmailService } from './users/email.service';
import {EmailModule} from './email/email.module';

//dotenv
import {ConfigModule} from "@nestjs/config";
import emailConfig from "./config/emailConfig";
import { validationSchema } from './config/validationSchema';

// const envFilePath =
//     (process.env.NODE_ENV === 'production') ? './env/.production.env'
//         : (process.env.NODE_ENV === 'stage') ? './env/.stage.env' : './env/.development.env'


@Module({
    // Nest에서 제공되는 Config 패키지
    // forRoot 매서드는 Dynamic Module을 리턴하는 정적 메서드
    imports: [UsersModule, EmailModule, ConfigModule.forRoot({
        envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
        load: [emailConfig], // load 속성을 통해 앞서 구성해둔 configFactory 지정
        isGlobal: true, // 전역 모듈로 사용
        validationSchema // 환경변수의 값에 대한 유효성 검사를 수행하도록 joi를 이용해 유효성 검사 객체를 작성
    })],
    controllers: [ApiController, AppController],
    providers: [AppService],
})
export class AppModule {
}

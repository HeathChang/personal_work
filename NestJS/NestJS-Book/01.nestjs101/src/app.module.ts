import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {ApiController} from './api/api.controller';
// import { EmailService } from './users/email.service';
import {EmailModule} from './email/email.module';

//dotenv
import {ConfigModule} from "@nestjs/config";
import emailConfig from "./config/emailConfig";
import {validationSchema} from './config/validationSchema';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";
import {UserEntity} from "./users/entities/user.entity";
import {LoggerMiddleware} from "./middleware/logger.middleware";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./guard/authguard";
import { LoggerService } from './logger/logger.service';
import authConfig from "./config/authConfig";
import {utilities, WinstonModule} from "nest-winston";
import * as winston from "winston";

@Module({
    // Nest에서 제공되는 Config 패키지
    // forRoot 매서드는 Dynamic Module을 리턴하는 정적 메서드
    imports: [
        UsersModule,
        EmailModule,
        // configure 설정
        ConfigModule.forRoot({
            envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
            load: [emailConfig, authConfig], // load 속성을 통해 앞서 구성해둔 configFactory 지정
            isGlobal: true, // 전역 모듈로 사용
            validationSchema // 환경변수의 값에 대한 유효성 검사를 수행하도록 joi를 이용해 유효성 검사 객체를 작성
        }),
        // DB 설정
        TypeOrmModule.forRoot({ // 1. TypeOrm을 동적 모듈로 가져옴
            type: 'mysql', // TypeOrmModule 이 다루고자 하는 DB 타입
            host: process.env.DB_HOST, // 연결할 DB 호스트 주소
            port: 3306, // DB와의 연결을 위해 열어 놓은 포트 번호
            username: process.env.DB_USERNAME, // DB user id
            password: process.env.DB_PASSWORD, // DB user pw
            database: 'test', // 연결하고자 하는 DB 스키마 이름.
            // entities: [__dirname + '**/**/*.entity{.ts, .js}'], // 소스코드 내에서 TypeORM이 구동될 때 인식하도록 할 엔티티 클래스의 경로 지정
            entities: [UserEntity],
            synchronize: true, // synchronize는 서비스 구동 시, 소스 코드 기반으로 DB 스키마를 동기화할지 여부
        }),
        // winston: logger
        WinstonModule.forRoot({
            transports: [
                new winston.transports.Console({ // transport 옵션 설정
                    level: process.env.NODE_ENV === 'production' ? 'info' : 'silly', // 환경에 따라 로그레벨 설정
                    format: winston.format.combine(
                        winston.format.timestamp(), // 로그를 남긴 시각을 함께 표시
                        utilities.format.nestLike('MyApp', { // 어디에서 로그를 남겼는지 구분
                            prettyPrint: true // 읽기 쉽게 로그 설정
                        })
                    )
                })
            ]
        })
    ],
    controllers: [ApiController, AppController],
    providers: [
        AppService,
        LoggerService,
        // {
        // provide: APP_GUARD,
        // useClass: AuthGuard
        // }
    ],
})

// DESCRIPTION:: 미들웨어를 모듈에 포함시키기 위해서는 해당 모듈은 NestModule 인터페이스를 구현
export class AppModule implements NestModule {
    // configure 매서드에 인수로 전달된 MiddlewareConsumer 객체를 이용해 미들웨어를 어디에서 적용할 지 관리
    configure(consumer: MiddlewareConsumer): any {
        // consumer.apply(LoggerMiddleware, LoggerMiddleware2, LoggerMiddleware_Global).forRoutes('/users') // class가 아닌 function으로 사용해도 무방
        consumer
            .apply(LoggerMiddleware)  // 적용되는 middleware, 다중 사용시 [ , ] 로 구분
            // .exclude({path: '/users', method: RequestMethod.GET}) // 제외
            .forRoutes('/users')
        // .forRoutes(UsersController) // 이런식으로 RouteInfo 객체를 넘길 수 있음
    }
}

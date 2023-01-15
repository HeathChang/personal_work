import { registerAs } from "@nestjs/config";

export default registerAs('auth', () => ({
    jwtSecret: process.env.JWT_SECRET,
}));

// 중요:: configFactory 생성후, 사용하는 Module에 import 해야하고, 아래와 같이, app.module.ts의 configModule.forRoot에도 넣어주어야한다.
// ConfigModule.forRoot({
//             envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
//             load: [emailConfig, authConfig], // load 속성을 통해 앞서 구성해둔 configFactory 지정
//             isGlobal: true, // 전역 모듈로 사용
//             validationSchema // 환경변수의 값에 대한 유효성 검사를 수행하도록 joi를 이용해 유효성 검사 객체를 작성
//         }),
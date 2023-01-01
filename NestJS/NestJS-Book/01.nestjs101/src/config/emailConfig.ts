import { registerAs } from "@nestjs/config";

export default registerAs( 'email ', () => ({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_AUTH_USER,
        pass: process.env.EMAIL_AUTH_PASSWORD
    },
    baseUrl: process.env.EMAIL_BASE_URL
}))


// 설명: @nestjs/config 패키지에서 제공하는 registerAs 함수의 선언을 보면,
// 첫번째 인자로는 토큰을 문자열로 받고, 두번째 인수로는 ConfigFactory 함수를 상속하는 타입 TFacotry의 함수를 받아서 TFacotry의 && ConfigFacotryKeyHost를 합친 타입의 함수를 리턴함.

// emailConfig.ts를 설명하면, email 이라는 토큰으로 ConfigFactory 를 등록할 수있는 함수라고 이해할 것.
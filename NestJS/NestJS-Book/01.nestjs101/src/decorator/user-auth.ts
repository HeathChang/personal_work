import {createParamDecorator, ExecutionContext} from "@nestjs/common";

export const UserAuth = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
)

// DESC::
// 1. createParamDecorator  factory decorator를 사용해, UserAuth decorator를 선언
// 2. 실행 콘텍스트에서 요청 객체를 얻어옴.
// 3. AuthGuard에서 설정한 유저 객체를 반환. req.user가 타입이 any였다면, 이제 User라는 타입을 가지게 되어, ts의 이점을 누릴 수 있음.

// DESC 2::
// 첫번째 인수인 data를 사용하는 방법::
// data는 decorator를 선언할 때, 인수로 넘기는 값, 예를 들어 @UserAuth('name')과 같이 유저의 이름만 가져와서 매개변수로 받고 싶을 수 있음.
// 이때,  return data ? user?.[data]: user; 를 통해, 원하는 값만 넘겨받을 수 있다. (data: string으로 지정해줄 것)
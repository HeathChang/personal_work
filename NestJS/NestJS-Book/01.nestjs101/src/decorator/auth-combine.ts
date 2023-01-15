import {applyDecorators, UseGuards} from "@nestjs/common";

// export const AuthCombine = (...roles: Role[]) => {
//        applyDecorators(
//         setMetadata('roles', roles),
//         UseGuards(AuthGuard, RolesGuard),
//         ApiBearerAuth(),
//         ApiUnauthorizedResponse({ description: 'Unauthorized'})
//     )
//     }
// )
//
// export function AuthCombine(...roles: Role[]){
//     return applyDecorators(
//         setMetadata('roles', roles),
//         UseGuards(AuthGuard, RolesGuard),
//         ApiBearerAuth(),
//         ApiUnauthorizedResponse({ description: 'Unauthorized'})
//     )
// }

// DESC:: applyDecorators 핼퍼 메서드를 이용해, 여러 decorator를 하나로 합칠수 있다.
// 다양한 Decorators 를 하나로, 합쳐서 AuthCombine이라는 Decorator로 합성하는 예시.
// 1번째 인수로. Role을 콤마로 연결해 받는데, 여기서 Role은 'admin', 'user' 같은 문자열로 정의된 enum
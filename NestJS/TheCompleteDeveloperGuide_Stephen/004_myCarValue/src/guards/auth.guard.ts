import {
    CanActivate,
    ExecutionContext
} from '@nestjs/common';


export class AuthGuard implements CanActivate {
    //CanActivate(): Return truthy value if user cann access to the route, false if not.
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        return request.session.userId
    }

}
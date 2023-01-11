import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import { AuthService } from "../module/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate  {
    constructor(
        private readonly authService: AuthService
    ) {
    }
    // 여기서 사용되는, canActivate 함수는 ExecutionContext 객체를 인수로 받음.
    // 이는, ArgumentsHost를 상속받는데, 요청과 응답에 대한 정보를 가지고 있음.
    // 인터페이스에서 제공하는 함수중 swtichToHttp()함수를 사용해 필요한 정보가져옴
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        // console.log('getting request:: ', request)
        console.log('auth guard activated')
        return this.validateRequest(request)
    }
    private  validateRequest(request: any){
        const jwtString = request?.headers?.authorization.split('Bearer')[1].trim()
        const {userId, email} = this.authService.verify(jwtString)
        if(!userId){
            throw new UnauthorizedException('Cannot find correct jwt')
        }
        return true;
    }
}






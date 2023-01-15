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
        return this.validateRequest(request);
    }
    private  validateRequest(request: any){
        // 아래서, Bearer는  JWT 혹은 OAuth에 대한 토큰을 사용한다. (RFC 6750)
        const jwtString = request?.headers?.authorization.split('Bearer')[1].trim()
        const {userId, email, name} = this.authService.verify(jwtString)
        if(!userId){
            throw new UnauthorizedException('Cannot find correct jwt')
        }
        // verify가 되면, 받은 request에 원하는 값을 넣어주면 된다.
        request.user = { id:userId, email, name}
        return true;
    }
}






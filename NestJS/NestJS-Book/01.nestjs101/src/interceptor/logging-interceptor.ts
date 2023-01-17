import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable, tap} from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor{ // 패키지에서 제공되는 인터페이스 구현 클래스
    // @ts-ignore
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> { // NestInterceptor interface interface 함수 구현 필요
        console.log('Before::: ')
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(()=>{
                console.log(`After... ${Date.now()- now}ms`)
            }))
        // Before:::
        // After... 3ms
    }

}
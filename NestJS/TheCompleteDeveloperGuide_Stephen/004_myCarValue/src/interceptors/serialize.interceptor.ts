import {UseInterceptors, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {plainToClass} from 'class-transformer'

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Run sth before a request is handled by the request handler
        console.log('I am running before:: ', context)


        return handler.handle().pipe(
            map((data: any) => {
                // Run sth before the response is send out (back) to the Front (after controller gets the data)
                console.log('I am running right before the data::::', data)
            })
        )
    }

}
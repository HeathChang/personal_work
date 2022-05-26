import {UseInterceptors, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {plainToClass} from 'class-transformer'

interface ClassConstructor {
    new(...arg: any[]): {}
    // this means that any class all good
}

// export function Serialize(dto: any) {
export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor {
    // constructor(private dto: any) {
    constructor(private dto: ClassConstructor) {
    }

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Run sth before a request is handled by the request handler

        return handler.handle().pipe(
            map((data: any) => {
                // Run sth before the response is send out (back) to the Front (after controller gets the data)
                // still using an instance of User entity
                // => Until here, data is User entity


                //take user entity and turn it into user instant
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true, // ensures only values that has expose() decorator will be change to plainJSON
                })

            })
        )
    }

}
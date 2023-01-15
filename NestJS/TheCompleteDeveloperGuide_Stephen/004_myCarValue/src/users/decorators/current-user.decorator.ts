import {
    createParamDecorator,
    ExecutionContext,
} from '@nestjs/common'

export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest(); // give us the underlying request that is coming into app
        console.log("ID::::", request.session.userId)

        return request.currentUser
        // Param decorator exist outside of DI system, decorator cannot get an Instance of UsersService directly

    }
)
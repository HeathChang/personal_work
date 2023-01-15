import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction} from "express";


// RESULT:: Middle Ware::
@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log('LoggerMiddleware :: ')
        next();
    }
}

@Injectable()
export class LoggerMiddleware2 implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log('LoggerMiddleware2 :: ')
        next();
    }
}

// DESC:: 전역으로 사용될 미들웨어
// NestFactory.create으로 main.ts.에서 만든 app은 INestApplication 타입을 가지고 있는데, class에서 정의된 use() 매서드는 클래스를 인수로 받을 수 없기 떄문
export function LoggerMiddleware_Global(req: Request, res: Response, next: NextFunction){
    // console.log('LoggerMiddleware_Global :: ', req, res)
    console.log('Middleware')
    next()
}
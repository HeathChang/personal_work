import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction} from "express";


// RESULT:: Middle Ware::
@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log('Middle Ware:: ')
        next();
    }
}

@Injectable()
export class LoggerMiddleware2 implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log('Middle Ware:: ')
        next();
    }
}
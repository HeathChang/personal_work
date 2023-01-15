import {ConsoleLogger, Injectable, LogLevel} from '@nestjs/common';


interface logInterface {
    log(message: any, ...optionalParams: any[]): any;

    error(message: any, ...optionalParams: any[]): any;

    warn(message: any, ...optionalParams: any[]): any;

    debug?(message: any, ...optionalParams: any[]): any;

    verbose?(message: any, ...optionalParams: any[]): any;

    setLogLevels?(levels: LogLevel[]): any;
}

@Injectable()

// export class LoggerService implements logInterface {
export class LoggerService extends  ConsoleLogger {
    log(message: any, ...optionalParams): any {
        console.log(message)
    }
    error(message: any, stack?: string, context?: string): any {
        // console.log(message,'-', arguments)
        super.error.apply(this, arguments)
        this.doSth()
    }
    warn(message: any, ...optionalParams): any {
        super.warn.apply(this, arguments)
        console.log(message)
    }
    debug(message: any, ...optionalParams): any {
        console.log(message)
    }

    verbose(message: any, ...optionalParams): any {
        console.log(message)
    }

    private doSth() {
        // 로깅에 관련된 부가 로직 (EG DB에 저장 등)
        return true;
    }
}



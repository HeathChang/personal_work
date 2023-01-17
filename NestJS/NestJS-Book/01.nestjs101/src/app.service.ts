import {Inject, Injectable, Logger} from '@nestjs/common';
// import {LoggerService} from "./logger/logger.service";
import {LoggerService} from "@nestjs/common";
import {WINSTON_MODULE_NEST_PROVIDER} from "nest-winston";

@Injectable()
export class AppService {
    // private readonly logger = new Logger(AppService.name)

    // custom logger 사용
    // private readonly logger = new LoggerService()

    // nest-package logger 사용
    // LoggerService 를 WINSTON_MODULE_NEST_PROVIDER 토큰으로 주입받음
    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private logger: LoggerService
    ) {
    }


    // [Nest] 3894  - 01/15/2023, 6:53:49 PM   ERROR [AppService] Level:: error
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM    WARN [AppService] Level:: warn
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM     LOG [AppService] Level:: log
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM VERBOSE [AppService] Level:: verbose
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM   DEBUG [AppService] Level:: debug

    getHello(): string {
        // [MyApp] Error   1/17/2023, 1:06:50 PM Level:: error - { stack: [ null ] }
        // [MyApp] Warn    1/17/2023, 1:06:50 PM Level:: warn - {}
        // [MyApp] Info    1/17/2023, 1:06:50 PM Level:: log - {}
        // [MyApp] Verbose 1/17/2023, 1:06:50 PM Level:: verbose - {}
        // [MyApp] Debug   1/17/2023, 1:06:50 PM Level:: debug - {}
        this.logger.error('Level:: error');
        this.logger.warn('Level:: warn')
        this.logger.log('Level:: log')
        this.logger.verbose('Level:: verbose')
        this.logger.debug('Level:: debug')

        return 'Hello World!';
    }


}

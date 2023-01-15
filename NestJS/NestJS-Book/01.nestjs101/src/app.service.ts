import {Injectable, Logger} from '@nestjs/common';
import {LoggerService} from "./logger/logger.service";

@Injectable()
export class AppService {
    // private readonly logger = new Logger(AppService.name)

    // custom logger 사용
    private readonly logger = new LoggerService()
    constructor() {
    }


    // [Nest] 3894  - 01/15/2023, 6:53:49 PM   ERROR [AppService] Level:: error
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM    WARN [AppService] Level:: warn
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM     LOG [AppService] Level:: log
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM VERBOSE [AppService] Level:: verbose
    // [Nest] 3894  - 01/15/2023, 6:53:49 PM   DEBUG [AppService] Level:: debug

    getHello(): string {
        this.logger.error('Level:: error');
        this.logger.warn('Level:: warn')
        this.logger.log('Level:: log')
        this.logger.verbose('Level:: verbose')
        this.logger.debug('Level:: debug')
        return 'Hello World!';
    }


}

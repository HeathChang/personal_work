import { Controller, Get, HostParam } from '@nestjs/common';


@Controller({ host: 'api.localhost' })
// @Controller({ host: ':version.api.localhost' })
export class ApiController {
    @Get()
    example1(): string {
        return 'Hello, API'
    }
    // curl http://v1.api.localhost:3000
    // Hello, API%
    @Get()
    example2(@HostParam('version') version: string): string {
        return `Hello, ${version}`;
    }
    // curl http://v1.api.localhost:3000
    // Hello, v1%
}

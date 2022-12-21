import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  // 경로중에 / 는 생략할 수 있다.
  getHello(): string {
    return this.appService.getHello();
  }
}

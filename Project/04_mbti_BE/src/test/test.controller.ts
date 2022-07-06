import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { TestDto as TestDTO } from "../dtos/test.dto";
import {TestService} from './test.service'

@Controller("/api/test")
export class TestController {
  constructor(private testService: TestService){
  }

  @Post("/save_test")
  saveTest(@Body() body: TestDTO) {
    // const result = await this.testService.saveResult(body.index, body.resultSet)
    // console.log('result:: ', result)
    return body;
  }

  @Get("/get_test")
  async getTest(@Body() body: TestDTO) {
    console.log('body check::: ', body)
    const result = await this.testService.fetch(body.index)
    return result
  }
}

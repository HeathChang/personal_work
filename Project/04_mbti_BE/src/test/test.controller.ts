import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { TestDto as TestDTO } from "../dtos/test.dto";

@Controller("/api/test")
export class TestController {
  // constructor(private testDTO: TestDTO){
  // }

  @Post('/save_test')
  saveResult(@Body() body:TestDTO) {
    // const result = await this.testService.saveResult(body.index, body.resultSet)
    // console.log('result:: ', result)
    return body
  }

}

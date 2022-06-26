import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { TestDto as TestDTO } from "../dtos/test.dto";

@Controller("/api/test")
export class TestController {
  @Post('/save_test')
  saveTestResult(@Body() body:any) {
    console.log('>>> ',body)
    return body
  }

}

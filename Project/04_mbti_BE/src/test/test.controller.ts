import { Controller, Get, Post, Param } from "@nestjs/common";
import { TestDto as TestDTO } from "../dtos/test.dto";

@Controller("test")
export class TestController {
  @Post("/postTest")
  saveTestResult(@Param() params: any) {
    console.log(112, params)
    return params
  }

}

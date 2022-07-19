import { Controller, Get, Post, Param, Body, Patch } from "@nestjs/common";
import { TestDto as TestDTO } from "../dtos/test.dto";
import { TestService } from "./test.service";

@Controller("/api/test")
export class TestController {
  constructor(private testService: TestService) {
  }

  @Post("/save_test")
  async saveTest(@Body() body: any) {
    const result = await this.testService.save(body.index, body.index);
    // const result = await this.testService.save(body.index, body.resultSet)
    console.log("body check:: ", body);
  }

  @Patch("/getTest")
  async getTest(@Body() body: any) {
    const result = await this.testService.fetch(body.index);
    return result;
  }
}

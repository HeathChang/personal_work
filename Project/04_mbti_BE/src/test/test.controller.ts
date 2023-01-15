import { Controller, Get, Post, Param, Body, Patch } from "@nestjs/common";
import { TestDto as TestDTO } from "../dtos/test.dto";
import { TestService } from "./test.service";

@Controller("/api/test")
export class TestController {
  constructor(private testService: TestService) {
  }

  @Post("/fetchResult")
  async saveTest(@Body("result") mbti: string) {
    const result = await this.testService.save(mbti);
    return result;
  }

  @Patch("/getTest")
  async getTest(@Body() body: any) {
    const result = await this.testService.fetch(body.index);
    return result;
  }
}

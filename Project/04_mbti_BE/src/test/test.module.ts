import { Module } from "@nestjs/common";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { mbti } from "./entity/mbti.entity";
import { result } from "./entity/result.entity";

@Module({
  imports: [TypeOrmModule.forFeature([mbti, result] )],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {
}

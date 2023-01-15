import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TestModule } from "./test/test.module";

import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./configs/mbti_typeorm.config";


@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), TestModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

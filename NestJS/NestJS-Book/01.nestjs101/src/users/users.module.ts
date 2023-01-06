import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {EmailModule} from "../email/email.module";
import {EmailService} from "../email/email.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature(([UserEntity])), // forFeature 매서드로 모듈 내에서 사용할 저장소 등록 (TypeORM 사용하려면 등록 필요)
      EmailModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {EmailModule} from "../email/email.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {AuthModule} from "../module/auth/auth.module";
import {CqrsModule} from "@nestjs/cqrs";

@Module({
  imports: [
      TypeOrmModule.forFeature(([UserEntity])), // forFeature 매서드로 모듈 내에서 사용할 저장소 등록 (TypeORM 사용하려면 등록 필요)
      EmailModule,
      AuthModule,
      CqrsModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

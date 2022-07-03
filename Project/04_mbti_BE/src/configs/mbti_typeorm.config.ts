import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MBTI } from "../test/entity/mbti.entity";


export const typeORMConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "mbti",
  entities: [MBTI],
  // entities: ['dist/**/*.entity.ts'],
  synchronize: true

};
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { mbti } from "../test/entity/mbti.entity";
import { result } from "../test/entity/result.entity";


export const typeORMConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "mbti",
  entities: [mbti,result],
  // entities: ['dist/**/*.entity.ts'],
  synchronize: true

};
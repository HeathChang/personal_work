import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database:'mbti',
  entities: ['dist/**/*.entity.ts'],
  synchronize: false

}
import { IsString,IsNumber, IsObject,IsNotEmpty,IsOptional } from "class-validator";

export class TestDto {

  index: string;

  @IsObject()
  @IsOptional()
  resultSet: Object;
}
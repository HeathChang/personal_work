import { IsString,IsNumber, IsObject,IsNotEmpty,IsOptional } from "class-validator";

export class TestDto {
  @IsNumber()
  index: Number;

  @IsObject()
  @IsOptional()
  resultSet: Object;
}
import { IsString,IsNumber, IsObject,IsNotEmpty } from "class-validator";

export class TestDto {
  @IsNumber()
  index: Number;

  @IsObject()
  resultSet: Object;
}
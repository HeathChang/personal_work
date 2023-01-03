// NestJS에서 payload 를 처리하기 위해서는 데이터 전송 객체 (DTO)를 구현하면 된다.
import {IsString, MaxLength, MinLength, IsEmail } from "class-validator";
import {Expose} from 'class-transformer'

export class CreateUserDto {
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    readonly name: string;
    @IsEmail()
    readonly email: string;
    readonly password: string;

}

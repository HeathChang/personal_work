// NestJS에서 payload 를 처리하기 위해서는 데이터 전송 객체 (DTO)를 구현하면 된다.
import {IsString, MaxLength, MinLength, IsEmail } from "class-validator";
import {Expose, Transform} from 'class-transformer'
import {required} from "joi";
import NotIn from "../../decorator/not-in";

export class CreateUserDto {
    @Transform(params => {
        return params.value.trim()
    })
    @NotIn('password', {message: 'password 체크'})
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    readonly name: string;


    @IsEmail()
    readonly email: string;

    readonly password: string;

}

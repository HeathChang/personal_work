import {IsEmail, IsString, IsOptional} from 'class-validator';

export class UpdateUserDto {
    @IsEmail()
    @IsOptional() // Optional Data
    email: string;

    @IsString()
    @IsOptional()
    password: string;
}
import {IsString, IsNumber, Min, Max, IsLongitude, IsLatitude} from 'class-validator';
import {Column, PrimaryGeneratedColumn} from "typeorm";

export class CreateReportDto {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsNumber()
    @Min(1938)
    @Max(2050)
    year: number;

    @IsNumber()
    @Min(0)
    @Max(1000000)
    mileage: number;

    @IsLongitude()
    lng: number;

    @IsLatitude()
    lat: number;

    @IsNumber()
    @Min(100)
    @Max(1000000)
    price: number;
}
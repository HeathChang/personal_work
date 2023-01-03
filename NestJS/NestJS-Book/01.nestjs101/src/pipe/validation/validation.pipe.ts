import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    // 구현되어야 하는 transform은 두개의 parameter 있음.
    // 1. value: 현재 pipe로 전달되는 인수
    // 2. metadata: 현재 파이프에 전달되는 인수의 메타데이터
    // before::
    // transform(value: any, metadata: ArgumentMetadata): any {
    //
    //     return value;
    // }

    // after::
    // CMD :: http://localhost:3000/origin/create -H "Content-Type: application/json" -d '{"name": "name_example", "email":"email@example.com"}'
    // RESULT:: {"name":"name_example","email":"email@example.com"}%
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        //take user entity and turn it into  instant
        const object = plainToClass(metatype, value);
        const errors = await validate(object)
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed');
        }
        return value
    }

    // 설명::
    // 전달된 metatype이 파이프가 지원하는 타입인지 검사.
    // class-transformer의 plainToClass 함수를 통해 순수 자바스크립트 객체를 클래스의 객체로 변경
    // class-validator의 유효성 검사 데커레이터는 타입이 필요.
    // 네트워크 요청을 통해 들어온 데이터는 역직렬화 과정에서 본문의 객체가 아무런 타입 정보도 가지고 있지 않기 떄문에, 타입을 지정하는 변환과정을 plainToClass로 수행
    // 마지막으로 유효성 검사에 통과했다면, 원래 값 그대로 전달  || 실패시 400 에러

    // 네트워크

    // ArgumentMetadata  정의
    // type: 파이프에 전달된 param의 종류 (Body, Param, Query)
    // metatype:: 라우트 핸들러에 정의된 인수의 타입/ 핸들러에서 타입을 샹략하거나 바닐라 사용시 undefined
    // data:: decorator에 전달된 문자열 => 매개변수의 이름

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }


}
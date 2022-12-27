// NestJS에서 payload 를 처리하기 위해서는 데이터 전송 객체 (DTO)를 구현하면 된다.
export class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;

}

// 이메일 인증 시, URL에 포함되어 전달되는 쿼리 매개변수를 @Query decorator0 와 함께 DTO로 받음.
export class VerifyEmailDto {
    signupVerifyToken: string;
}

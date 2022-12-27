import { Injectable } from '@nestjs/common';
import  Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer'


interface EmailOptions  {
    to: string,
    subject: string,
    html: string
}
@Injectable()
export class EmailService {
    private transporter: Mail;
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:  'G-MAIL 이메일 주소',
                pass: 'G-MAIL 이메일 비번 > 2차 비번'
                // ㄱnodemailer는 간단한 이메일 전송 테스트만을 위해 작성되었기 때문에, 2단계 인증 활성화 및 앱 비밀번호를 진행해야됨
            }
        })
    }

    async sendMemberJoinVerification(emailAddress: string, signupVerifyToken: string){
        const baseUrl = 'http://localhost: 3000'
        const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;
        const mailOptions: EmailOptions = {
            to: emailAddress,
            subject: '가입인증 메일',
            html: `
                가입확인 버튼을 누르시면 가입인증이 완료 됩니다. <br/>
                <form action="${url}" method="POST">
                <button>가입 확인 버튼</button></form>
            `
        }

        return await this.transporter.sendMail(mailOptions);
    }


}

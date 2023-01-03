import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as uuid from "uuid"
import {EmailService} from "../email/email.service";
import {UserInfo} from "./interface/user-info";


@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}


  findAll(offset, limit) {
    return `This action returns all users offset:: ${offset} & limit:: ${limit}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  create(createUserDto) {
    return `${JSON.stringify(createUserDto)}`;
  }

  private checkUserExists(email: string){
    return false;
  }
  async createUser(name: string, email: string, password: string) {
    // await this.checkUserExists(email);
    const signupVerifyToken = uuid.v1();
    await this.saveUser(name, email,password, signupVerifyToken);
    const res  = await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    return res
  }

  async verifyEmail(signupVerifyToken: string): Promise<string>{
    // TODO
    // 1, DB에서 회원가입 처리중인 유저가 있는지 조회 및 처리
    // 2. 바로 로그인 상태가 되도록 JWT 발급
    throw new Error('Method not implemented.')
  }

  async login(email: string, password: string): Promise<string>{
    // TODO
    // 1, DB에서 email과 password를 가진 유저가 있는지 확인하고, 없다면 에러 처리
    // 2.  JWT 발급
    // return '';
    throw new Error('Method not implemented.')
  }
  async getUserInfo(userId: string): Promise<UserInfo>{
    // TODO
    // 1, DB에서 userId 가진 유저가 있는지 확인하고, 없다면 에러 처리
    // 2. UserInfo 타입으로 응답
    // return '';
    throw new Error('Method not implemented.')
  }

  private saveUser(name: string, email: string, password: string, signupVerifyToken: string){
    return;
  }

  private async sendMemberJoinEmail( email: string, signupVerifyToken: string) {
    return this.emailService.sendMemberJoinVerification(email,signupVerifyToken)
  }

  //
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

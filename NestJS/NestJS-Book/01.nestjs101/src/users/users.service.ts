import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as uuid from "uuid"
import {EmailService} from "../email/email.service";
import {UserInfo} from "./interface/user-info";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import { ulid } from "ulid";


@Injectable()
export class UsersService {
  constructor(
      private emailService: EmailService,
      @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity> // UsersService에 유저 저장소 주입
  ) {}





  findAll(offset, limit) {
    return `This action returns all users offset:: ${offset} & limit:: ${limit}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  create(createUserDto) {
    return `${JSON.stringify(createUserDto)}`;
  }

  private async checkUserExists(email: string){
    const user = await this.usersRepository.findOne({
      where: {email: email}
    })
    return user !== undefined;
  }
  async createUser(name: string, email: string, password: string) {
    const usersExist = await this.checkUserExists(email);
    if(usersExist) throw new Error('이미 존재하는 email')
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

  private async saveUser(name: string, email: string, password: string, signupVerifyToken: string){
    const user = new UserEntity();
    user.id= ulid(); // npm u ulid (랜덤한 string 값)
    user.name = name;
    user.email = email;
    user.password = password;
    user.signupVerifyToken = signupVerifyToken;
    await this.usersRepository.save(user);
    // =>  결과값
    // createUser:::  {
    //   accepted: [ 'email@example.com' ],
    //   rejected: [],
    //   envelopeTime: 1324,
    //   messageTime: 855,
    //   messageSize: 789,
    //   response: '250 2.0.0 OK  1672997421 u3-20020a17090341c300b0018f6900a183sm505493ple.140 - gsmtp',
    //   envelope: { from: '', to: [ 'email@example.com' ] },
    //   messageId: '<2146cec5-71de-1198-61aa-b5fb2b8eec25@localhost>'
    // }

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

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as uuid from "uuid"
import {EmailService} from "./email.service";


@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}
  async createUser(name: string, email: string, password: string) {
    // await this.checkUserExists(email);
    const signupVerifyToken = uuid.v1();
    await this.saveUser(name, email,password, signupVerifyToken);
    const res  = await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    return res
  }
  private checkUserExists(email: string){
    return false;
  }

  private saveUser(name: string, email: string, password: string, signupVerifyToken: string){
    return;
  }

  private async sendMemberJoinEmail( email: string, signupVerifyToken: string) {
    return this.emailService.sendMemberJoinVerification(email,signupVerifyToken)
  }


  //   return 'This action adds a new user';
  // }
  // findAll() {
  //   return `This action returns all users`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
  //
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

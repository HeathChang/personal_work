import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as uuid from "uuid"
import {EmailService} from "../email/email.service";
import {UserInfo} from "./interface/user-info";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository, DataSource} from "typeorm";
import { ulid } from "ulid";



@Injectable()
export class UsersService {
  constructor(
      private emailService: EmailService,
      private dataSource:  DataSource,
      @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity> // UsersService에 유저 저장소 주입

  ) {}

  // Transaction 사용 방법:
  // 1. typeorm에 제공하는 DataSource 객체를 주입. (DataSource 객체에서 트랜잭션을 생성 가능, 유저를 저장하는 로직에 트랜잭션을 사용)
  private async saveUserUsingQueryRunner(name: string, email: string, password: string, signupVerifyToken: string){
    const queryRunner = this.dataSource.createQueryRunner(); // 주입받은 DataSource 객체에서 QueryRunner를 생성
    await queryRunner.connect(); // queryRunner에서 DB에 연결,
    await queryRunner.startTransaction(); // 트랜잭션 시작
    try {
      const user = new UserEntity()
      user.id = ulid();
      user.name = name;
      user.email = email;
      user.password = password;
      user.signupVerifyToken = signupVerifyToken;

      await queryRunner.manager.save(user) // 정상 동작을 수행했다면, 트랜잭션을 커밋하여 persistence 설정.
      // throw new InternalServerErrorException(); // 고의성 에러 발생
      await queryRunner.commitTransaction(); // db 작업 수행한 후, 커밋해 persistence 완료

    } catch(err){
      await queryRunner.rollbackTransaction(); // 에러 발생시, 직접 롤백 수행
    } finally {
      await queryRunner.release(); // 직접 생성한 QueryRunner 해제
    }
  }
  // 2. transaction 함수를 직접 이용 : DI 받은 datasource 객체 내의 transaction 함수를 이용
  // transaction method는 주어진 함수 실행을 트랜잭션으로 래핑함.
  private async saveUserUsingTransaction(name: string, email: string, password: string, signupVerifyToken: string){
    await this.dataSource.transaction(async manager => {
      const user = new UserEntity();
      user.id = ulid();
      user.name = name;
      user.email = email;
      user.password = password;
      user.signupVerifyToken = signupVerifyToken;
      await manager.save(user)
    })
  }

  // 미들웨어: 라우트 핸들러가 클라이언트 요청을 처리하기 전에 수행되는 컴포넌트  (중요: 반드시 next() 명령어를 사용하여 다음 미들웨어에 제어권을 전달해야함. )
  // 역할:
  // 1. 쿠키 파싱: 쿠키를 파싱하여 사용하기 쉬운 데이터 구조로 변경.
  // 2. 세션 관리: 세션 쿠키를 찾고, 해당 쿠키에 대한 세션의 상태를 조회해서 요청에 세션 정보를 추가함. 이를 통해 다른 핸들러가 세션 객체를 이용할 수 있게 함.
  // 3. 인증/인가: 사용자가 서비스에 접근 가능한 권한이 있는지 확인함. (이때, nest 는 인가를 구현할 떄, 가드를 이용하도록 권장)
  // 4. 본문파싱: 본문으로 들어오는 요청을 읽고, 해석한 후, 다음 매개변수에 넣는 작업을 함.
  // DB에 수정을 가하는 요청이 있을떄마다, 트랜잭션을 걸고, 동작을 수행한 후 커밋하는 미들웨어 작성하여 사용


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

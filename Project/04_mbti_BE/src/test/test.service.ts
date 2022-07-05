import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import {mbti} from './entity/mbti.entity'

@Injectable()
export class TestService {
  constructor(@InjectRepository(mbti) private repo: Repository<mbti>) {}

  fetch(index: number){
    return this.repo.findBy({index})
  }

}

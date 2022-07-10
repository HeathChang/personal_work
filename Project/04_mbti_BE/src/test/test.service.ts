import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TestDto as TestDTO } from "../dtos/test.dto";

import { mbti } from "./entity/mbti.entity";
import { result } from "./entity/result.entity";

@Injectable()
export class TestService {
  constructor(@InjectRepository(mbti) private mbtiRepo: Repository<mbti>,
              @InjectRepository(result) private resultRepo: Repository<result>) {
  }

  save(index: any, response: Object) {
    for (let i in response) {
      console.log(i, response[i]);
      const res = this.resultRepo.create(i, response[i]);
      console.log(123, res);
    }
    return true
  }

  fetch(idx: string) {
    return this.mbtiRepo.findBy({ idx });
  }

}

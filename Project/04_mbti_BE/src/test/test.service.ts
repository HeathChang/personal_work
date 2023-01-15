import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TestDto as TestDTO } from "../dtos/test.dto";

import { mbti } from "./entity/mbti.entity";
import { result } from "./entity/result.entity";
import { response } from "express";

@Injectable()
export class TestService {
  constructor(@InjectRepository(mbti) private mbtiRepo: Repository<mbti>,
              @InjectRepository(result) private resultRepo: Repository<result>) {
  }

  async save(mbti: string) {
    return this.resultRepo.findBy({ mbti });
  }

  fetch(idx: string) {
    return this.mbtiRepo.findBy({ idx });
  }

}

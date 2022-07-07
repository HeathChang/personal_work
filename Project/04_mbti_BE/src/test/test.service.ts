import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TestDto as TestDTO } from "../dtos/test.dto";

import { mbti } from "./entity/mbti.entity";

@Injectable()
export class TestService {
  constructor(@InjectRepository(mbti) private repo: Repository<mbti>) {
  }

  async save(index: any, resultSet: Object) {
    const res = await this.repo.create({ index, resultSet });
    return this.repo.save(res)
  }

  fetch(idx: string) {
    return this.repo.findBy({ idx });
  }

}

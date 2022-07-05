import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { mbti } from "./entity/mbti.entity";

@Injectable()
export class TestService {
  constructor(@InjectRepository(mbti) private repo: Repository<mbti>) {
  }

  fetch(index: string) {
    console.log(999, index);
    return this.repo.findBy({ index });
  }

}

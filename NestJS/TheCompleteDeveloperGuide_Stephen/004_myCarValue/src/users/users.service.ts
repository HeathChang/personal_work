import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {
        // 1.repo : argument name ( + abv )
        // 2.Repository<User>: repo is an instance of a type ORM repository that deals with instance of Users
        // 3.@InjectRepository: Aid to DI system which will tell the DI system that we need the Repository<User> repository
    }

    create(email: string, password: string) {
        const user = this.repo.create({email, password});
        return this.repo.save(user)
    }
}

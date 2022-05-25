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
        //by using create => able to use hooks (logInsert etc..)
        return this.repo.save(user)
    }

    findOne(id: number) {
        // @ts-ignore
        return this.repo.findOne(id);
    }

    find(email: string) {
        // @ts-ignore
        return this.repo.find({email});
    }


    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('user not found');
        }
        console.log('attr check:: ', attrs)
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number, attrs: Partial<User>) {
        // @ts-ignore
        const user = await this.findOne({email})
        if (!user) {
            throw new Error('user not found');
        }
        console.log('attr check:: ', attrs)
        Object.assign(user, attrs)
        return this.repo.remove(user)
    }
}

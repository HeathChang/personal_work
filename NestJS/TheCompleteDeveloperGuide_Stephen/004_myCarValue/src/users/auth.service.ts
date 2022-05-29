import {Injectable, BadRequestException} from '@nestjs/common';
import {UsersService} from './users.service'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {
    }

    async signUp(email: string, password: string) {
        //see if emaill in user profile
        const users = await this.usersService.find(email)
        if (users.length) {
            throw new BadRequestException('Email in Used')
        }
        //hash the users password

        // Create a new User and ave

        //return

    }

    signIn() {

    }
}
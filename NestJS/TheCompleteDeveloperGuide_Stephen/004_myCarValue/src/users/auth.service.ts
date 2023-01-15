import {Injectable, BadRequestException, NotFoundException} from '@nestjs/common';
import {UsersService} from './users.service'
import {randomBytes, scrypt as _scrypt} from 'crypto';
import {promisify} from 'util';

const scrypt = promisify(_scrypt);

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
        //hash the users password: Generate a salt and pass the data && Join the hashed salt
        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer
        const result = salt + '.' + hash.toString('hex')

        // Create a new User and Save it
        const user = await this.usersService.create(email, result)

        //return
        return user;
    }

    async signIn(email: string, password: string) {
        const [user] = await this.usersService.find(email)
        if (!user) {
            throw new NotFoundException('User not found')
        }
        const [salt, storedHash] = user.password.split('.')

        const hash = (await scrypt(password, salt, 32)) as Buffer;
        if (storedHash !== hash.toString('hex')) {
            throw new BadRequestException('Bad Password')
        }
        return user

    }
}
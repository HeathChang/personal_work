import {Test} from '@nestjs/testing';
import {create} from 'domain';
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";
import {User} from "./user.entity";
import {BadRequestException, NotFoundException} from "@nestjs/common";
import exp from "constants";


// 1. Role of describe
// -> Creating new scope
// => further description
describe('AuthService', () => {
    let service: AuthService;
    let fakeUsersService: Partial<UsersService>

    beforeEach(async () => {
        //Create a fake copy of the users service
        // Partial: TS will just check the properties we use.
        // const fakeUsersService: Partial<UsersService> = {
        fakeUsersService = {
            // 1. Why do we only create find & create => AuthService only use those two

            // 2. Promise.resolve(): find & create is asynchronous, so need time to read & write data to DB => need to have promise from two methods
            //    Promise.resolve creates Promise and immediately resolve it
            find: () => Promise.resolve([]),
            create: (email: string, password: string) => Promise.resolve({id: 1, email, password} as User),
        }

        const module = await Test.createTestingModule({
            // Provides: List of things we want to register in our Testing DI Container.
            providers: [AuthService, {
                // If anyone asks for Provide(UsersService), give them useValue(fakeUsersService)
                provide: UsersService,
                useValue: fakeUsersService
            }],
        }).compile()
        service = module.get(AuthService)
    })

    it('can create an instance of authService', async () => {
        expect(service).toBeDefined()
    })

    it('creates a new user with a salted and hashed password', async () => {
        const user = await service.signUp('asdf@asdf.com', 'asdf')

        expect(user.password).not.toEqual('asdf')
        const [_, hash] = user.password.split('.')
        expect(hash).toBeDefined();
    })

    it('throws an error is user signs up with email that is already in use', async () => {
        fakeUsersService.find = () => Promise.resolve([{email: 'in-use@email.com'} as User]);
        await expect(service.signUp('in-use@email.com', '123456')).rejects.toThrow(BadRequestException);
    })

    it('throws if signin is called with an unused email', async () => {
        await expect(service.signIn('in-use@email.com', '123456')).rejects.toThrow(NotFoundException)
    })

    it('throws if an invalid password is used', async () => {
        fakeUsersService.find = () => Promise.resolve([{email: 'in-use@email.com', password: 'qweqweqwe'} as User])
        await expect(service.signIn('in-use@email.com', '123456')).rejects.toThrow(BadRequestException)
    })

    it('returns a user if correct pw is provided', async () => {
        fakeUsersService.find = () => Promise.resolve([{
            email: 'asdf@asdf.com', password: '88d10d7df09f813e.96b6bb42367ad66dbab989a32740aeda90365be8f219304ce4341d1a98dc31b0'
        } as User])
        const user = await service.signIn('hehe@eee.com', 'mypa');
        expect(user).toBeDefined();
        await expect(service.signIn('hehe@eee.com', 'mypassword')).rejects.toThrow(BadRequestException)
        // const user = await service.signUp('hehe@eee.com', 'mypa');
        // 88d10d7df09f813e.96b6bb42367ad66dbab989a32740aeda90365be8f219304ce4341d1a98dc31b0
    })
})

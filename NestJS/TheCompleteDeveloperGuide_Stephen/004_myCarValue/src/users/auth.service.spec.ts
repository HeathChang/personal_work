import {Test} from '@nestjs/testing';
import {create} from 'domain';
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";
import {User} from "./user.entity";


// 1. Role of describe
// -> Creating new scope
// => further description
describe('AuthService', () => {
    let service: AuthService;

    beforeEach(async () => {
        //Create a fake copy of the users service
        // Partial: TS will just check the properties we use.
        const fakeUsersService: Partial<UsersService> = {
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
})

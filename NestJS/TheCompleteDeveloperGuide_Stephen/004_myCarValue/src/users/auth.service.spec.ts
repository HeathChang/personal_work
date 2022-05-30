import {Test} from '@nestjs/testing';
import {create} from 'domain';
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";
import {User} from "./user.entity";

it('can create an instance of authService', async () => {
    //Create a fake copy of the users service
    // Partial: TS will just check the properties we use.
    const fakeUsersService: Partial<UsersService> = {
        // Why do we only create find & create => AuthService only use those two

        // Promise.resolve(): find & create is asynchronous, so need time to read & write data to DB => need to have promise from two methods
        // Promise.resolve creates Promise and immediately resolve it
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

    const service = module.get(AuthService)
    console.log("::", service)

    expect(service).toBeDefined()
})
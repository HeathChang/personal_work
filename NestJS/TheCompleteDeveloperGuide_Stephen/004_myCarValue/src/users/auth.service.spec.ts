import {Test} from '@nestjs/testing';
import {create} from 'domain';
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";

it('can create an instance of authService', async () => {
    //Create a fake copy of the users service
    const fakeUsersService = {
        find: () => Promise.resolve([]),
        create: (email: string, password: string) => Promise.resolve({id: 1, email, password}),
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
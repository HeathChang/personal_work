import {Controller, Get, Post, Body, Patch, Param, Query, Delete, NotFoundException, Session} from '@nestjs/common';
import {CreateUserDto} from './dtos/create-user.dto'
import {UpdateUserDto} from './dtos/update-user.dto'
import {UsersService} from './users.service'
import {Serialize} from '../interceptors/serialize.interceptor'
import {UserDto} from './dtos/user.dto'
import {AuthService} from './auth.service'
import {CurrentUser} from './decorators/current-user.decorator'

// before => UseInterceptors(new SerializeInterceptor(UserDto))
@Serialize(UserDto)
@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService,
                private authService: AuthService) {
    }

    @Post('/signout')
    signOut(@Session() session: any) {
        session.userId = null;
    }

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signUp(body.email, body.password)
        session.userId = user.id
        return user;
    }

    // @Get('/whoami')
    // whoAmI(@Session() session: any) {
    //     return this.usersService.findOne(session.userId)
    // }

    @Get('/whoami')
    whoAmI(@CurrentUser() user: string) {
        return user;
    }


    @Get('/signin')
    async signIn(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signIn(body.email, body.password)
        session.userId = user.id
        return user;
    }

    @Get('/:id')
    async findUser(@Param('id') id: string) {
        const res = await this.usersService.findOne(parseInt(id))
        if (!res) {
            throw new NotFoundException('Not-Found-Exception')
        }
        return res
    }

    @Get('')
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email)
    }

    @Delete('/:id')
    async removeUser(@Param('id') id: string) {
        const result = await this.usersService.remove(parseInt(id))
        console.log(result)
        return result
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body)
    }
}

import {Body, Controller, Get, NotFoundException, Param, Post} from '@nestjs/common';
import {CreateMessageDTO} from './DTO/create-message.dto';
import {MessagesService} from "./messages.service";

@Controller('messages')
export class MessagesController {
    // messagesService: MessagesService;
    //
    // constructor() {
    //     this.messagesService = new MessagesService();
    // }

    constructor(public messagesService: MessagesService) {
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id)
        if (!message) {
            throw new NotFoundException('Message not Found ')
        }
        return message
    }
}

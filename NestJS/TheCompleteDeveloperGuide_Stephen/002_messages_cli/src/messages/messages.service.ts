import {MessagesRepository} from './messages.repository'
import {Injectable} from "@nestjs/common";

@Injectable()
export class MessagesService {
    // messagesRepo: MessagesRepository;
    //
    // constructor(messagesRepo: MessagesRepository) {
    //     // Service is creating its ow n dependencies
    //     // DO not do this on Real Apps => Dependency Injection
    //     // this.messagesRepo = new MessagesRepository();
    //     // =>
    //     this.messagesRepo = messagesRepo ;
    // }
    // same as below
    constructor(public messagesRepo: MessagesRepository) {
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content)
    }
}
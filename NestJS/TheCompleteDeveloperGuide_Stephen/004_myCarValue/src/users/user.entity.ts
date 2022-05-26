import {Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log('after insert:: ',this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('after update:: ', this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log('remove:: ', this.id)
    }

}
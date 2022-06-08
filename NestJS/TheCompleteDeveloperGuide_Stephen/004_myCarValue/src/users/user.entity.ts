import {Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, OneToMany} from "typeorm";
import {Report} from '../reports/report.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Report, (report) => report.user)
    reports: Report[];

    @AfterInsert()
    logInsert() {
        console.log('after insert:: ', this.id)
    }

    @AfterUpdate()
    logUpdate() {
        console.log('after update:: ', this.id)
    }

    @AfterRemove()
    logRemove() {
        console.log('remove:: ', this.id)
    }

}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: "번호" })
  index: string ;

  @Column({ comment: "결과" })
  response: string ;
}

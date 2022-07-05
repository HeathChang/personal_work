import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class mbti {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: "인덱스" })
  index: number;

  @Column({ comment: "질문" })
  question: String;

  @Column({ comment: "대답" })
  response1: String;

  @Column({ comment: "대답2" })
  response2: String;
}
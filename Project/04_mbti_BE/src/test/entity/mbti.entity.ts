import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class mbti {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: "인덱스" })
  idx: string;

  @Column({ comment: "질문" })
  question: string;

  @Column({ comment: "대답" })
  response1: string;

  @Column({ comment: "대답2" })
  response2: string;
}
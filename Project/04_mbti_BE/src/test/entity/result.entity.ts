import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class result {
  @PrimaryGeneratedColumn({comment: '인덱스'})
  index: number ;

  @PrimaryColumn({comment: 'MBTI 검사 결과'})
  mbti: string ;

  @Column({ comment: "설명" })
  comments: string ;

  @Column({ comment: "비고" })
  note: string;
}

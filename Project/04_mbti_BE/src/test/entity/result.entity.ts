import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class result {
  @PrimaryGeneratedColumn({comment: '인덱스'})
  index: number ;

  @PrimaryColumn({comment: 'MBTI 검사 결과'})
  mbti: string ;

  @Column({ comment: "MBTI 검사 한줄" })
  mbtiSentence: string ;

  @Column({ comment: "장점" })
  adv: string;

  @Column({ comment: "단점" })
  dis: string;

  @Column({ comment: "성격" })
  personality: string;

  @Column({ comment: "추천 직업" })
  job: string;
}

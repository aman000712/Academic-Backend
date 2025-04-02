import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Eligibilityrelevantquestion {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    question: string

    @Column('text')
    answer: string


}

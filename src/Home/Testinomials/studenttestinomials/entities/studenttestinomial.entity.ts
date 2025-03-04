import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Studenttestinomial {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description:string

    @Column()
    name:string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    studenttestinomialimage:Fileupload



}

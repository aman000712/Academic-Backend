import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Eligibilityherosection {


    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    topimageid:Fileupload


    @Column()
    title:string

    @Column('text')
    description:string




}

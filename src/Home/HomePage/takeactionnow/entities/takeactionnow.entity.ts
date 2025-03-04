import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Takeactionnow {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    image:Fileupload



}

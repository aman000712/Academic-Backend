import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Theplp {


    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload

    @Column()
    title:string



}

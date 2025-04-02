import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notice {

    @PrimaryGeneratedColumn()
    id:number

    @Column('date')
    date:Date;

    @Column()
    event:string

    @Column('text')
    description:string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload



}

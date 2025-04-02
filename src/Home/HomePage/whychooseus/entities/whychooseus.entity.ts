import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Whychooseus {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column('text')
    description: string

    @Column('json')
    options: string[];

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload



}

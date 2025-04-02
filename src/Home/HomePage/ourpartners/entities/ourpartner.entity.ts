import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ourpartner {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subtitle: string

    @Column()
    title: string

    @Column('text')
    description: string
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Aboutgroupsgettoknow {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    subtitle: string


    @Column('text')
    description: string



}

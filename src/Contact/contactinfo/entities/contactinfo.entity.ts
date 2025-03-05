import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Contactinfo {


    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    mapurl: string

    @Column()
    title: string

    @Column('text')
    description: string


}

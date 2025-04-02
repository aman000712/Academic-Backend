import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Whythiscourse {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column('text')
    description:string

    @Column('json')
    majors:string[]

    
}

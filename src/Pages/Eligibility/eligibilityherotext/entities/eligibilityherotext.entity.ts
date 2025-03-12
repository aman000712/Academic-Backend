import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Eligibilityherotext {


    @PrimaryGeneratedColumn()
    id:number

    @Column()
    toptext:string

    @Column('text')
    description:string

    @Column('json')
    options:string[];
    
    @Column('text')
    message:string


}

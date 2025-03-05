import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Eligibilityherotext {


    @PrimaryGeneratedColumn()
    id:number

    @Column()
    toptext:string

    @Column('text')
    description:string

    @Column()
    options:string[];
    
    @Column()
    notice:string


}

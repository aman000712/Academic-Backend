import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weareproudtop {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column('text')
    description:string



}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Popularcoursestop {


    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string


}

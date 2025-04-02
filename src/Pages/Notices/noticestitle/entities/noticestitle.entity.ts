import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Noticestitle {


    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string

    @Column()
    subtitle:string



}

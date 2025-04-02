import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contactus {


    @PrimaryGeneratedColumn()
    id:number


    @Column({type:'json'})
    contactnumber:number[];

    @Column()
    email:string

    @Column()
    location:string




}

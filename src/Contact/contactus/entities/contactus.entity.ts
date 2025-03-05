import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

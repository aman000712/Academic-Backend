import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Testinomialstop {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string


}

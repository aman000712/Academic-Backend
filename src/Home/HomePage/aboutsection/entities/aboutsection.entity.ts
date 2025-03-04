import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Aboutsection {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    subtitle:string

    @Column()
    description:string


}

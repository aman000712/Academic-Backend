import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Frequentlyaskedtitle {


    @PrimaryGeneratedColumn()
    id:number


    @Column()
    title:string




}

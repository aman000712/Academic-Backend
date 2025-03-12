import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Eligibilitycontactforadvice {


    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column('text')
    description:string


}

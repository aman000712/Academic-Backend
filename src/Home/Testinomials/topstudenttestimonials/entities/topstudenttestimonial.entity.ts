import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Topstudenttestimonial {

    @PrimaryGeneratedColumn()
    id: number


    @Column()
    subtitle: string

    @Column()
    title: string



}

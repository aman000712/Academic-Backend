import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blogandupdatestop {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string


}

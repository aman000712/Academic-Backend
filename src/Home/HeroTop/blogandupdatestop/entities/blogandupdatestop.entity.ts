import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blogandupdatestop {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subtitle: string


    @Column()
    title: string

    @Column({type:"longtext"})
    description: string


}

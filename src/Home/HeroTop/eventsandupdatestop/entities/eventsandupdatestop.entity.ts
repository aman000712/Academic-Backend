import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Eventsandupdatestop {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subtitle: string

    @Column()
    title: string

    @Column()
    description: string


}

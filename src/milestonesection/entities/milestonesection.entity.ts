import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Milestonesection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    subtitle: string

    @Column()
    description: string

    


}
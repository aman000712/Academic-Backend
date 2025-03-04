import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Whychooseustop {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string


}

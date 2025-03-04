import { IsArray } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Milestonesection {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'json'})
    totalmilestone: number[]

    @Column({type: 'json'})
    type: string[];

    


}
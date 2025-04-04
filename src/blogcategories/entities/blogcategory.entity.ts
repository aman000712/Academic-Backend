import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Blogcategory {


    @PrimaryGeneratedColumn()
    id: number


    @Column()
    status: string





}

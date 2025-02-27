import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fileupload {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image:string


}

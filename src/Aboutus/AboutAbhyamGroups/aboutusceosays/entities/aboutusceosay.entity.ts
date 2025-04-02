import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Aboutusceosay {
    

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    subtitle:string;

    @Column()
    description:string;





}

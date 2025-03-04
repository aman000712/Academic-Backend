import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Topapplynow {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    page: string


    @Column()
    title: string

    @Column()
    subtitle: string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    topapplynowimage:Fileupload



}

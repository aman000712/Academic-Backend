import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Eligibilitycontactinfo {

    @PrimaryGeneratedColumn()
    id:number


    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload

    @Column()
    title:string

    @Column()
    name:string

    @Column()
    position:string

    @Column()
    contactnumber:string

    @Column()
    email:string

    @Column()
    dateandtime:string



}

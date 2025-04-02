import { join } from "path";
import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn,OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Aboutuscollaboration {


    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload;


    @Column()
    companyname:string

    @Column()
    companytype:string

    @Column('text')
    facebookurl:string

    @Column('text')
    instagramurl:string

    @Column('text')
    twitterurl:string


    @Column('text')
    linkedinurl:string




}

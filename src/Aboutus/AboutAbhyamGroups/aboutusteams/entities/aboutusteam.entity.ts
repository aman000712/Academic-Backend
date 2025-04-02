import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Aboutusteam {


    @PrimaryGeneratedColumn()
    id: number


    @OneToOne(()=>Fileupload)
    @JoinColumn()
    imageid:Fileupload;

    @Column()
    name:string;

    @Column()
    position:string;

    @Column('text')
    description:string;


    @Column()
    facebooklink:string;

    @Column()
    instagramlink:string;

    @Column()
    linkedinlink:string;




}

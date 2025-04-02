import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Aboutusceo {


    @PrimaryGeneratedColumn()
    id: number;


    @OneToOne(() => Fileupload)
    @JoinColumn()
    ceoimageid: Fileupload;


    @Column('text')
    description:string

    @Column()
    ceoname:string;

    @Column()
    position:string;

    @Column()
    moreinfo:string


}

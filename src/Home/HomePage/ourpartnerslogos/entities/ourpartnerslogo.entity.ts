import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ourpartnerslogo {


    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    logoimageid: Fileupload


}

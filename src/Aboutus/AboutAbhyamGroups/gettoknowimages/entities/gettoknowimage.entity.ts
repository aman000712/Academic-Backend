import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gettoknowimage {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(() => Fileupload)
    @JoinTable()
    imageid: Fileupload[]


}

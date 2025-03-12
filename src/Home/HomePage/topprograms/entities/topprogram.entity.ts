import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Topprogram {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subtitle: string


    @ManyToMany(() => Fileupload)
    @JoinTable()
    imageid: Fileupload[];


    @Column()
    title: string

    @Column()
    description: string


}

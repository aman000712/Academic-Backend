import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Takeactionnow {


    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Fileupload)
    @JoinColumn()
    imageid: Fileupload


    @Column()
    subtitle: string

    @Column()
    title: string

    @Column()
    description: string





}

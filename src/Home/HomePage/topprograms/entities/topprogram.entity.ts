import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Topprogram {


    @PrimaryGeneratedColumn()
    id: number


    @OneToOne(() => Fileupload)
    @JoinColumn()
    image: Fileupload


    @Column()
    title: string

    @Column()
    description: string


}

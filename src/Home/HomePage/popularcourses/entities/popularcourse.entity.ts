import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Popularcourse {


    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Fileupload)
    @JoinColumn()
    image: Fileupload

    @Column()
    course:string

    @Column()
    coursetype: string

    @Column()
    coursetitle: string

    @Column()
    coursedescription: string




}

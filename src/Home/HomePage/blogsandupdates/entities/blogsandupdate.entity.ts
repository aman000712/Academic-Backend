import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blogsandupdate {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Fileupload)
    @JoinColumn()
    blogimage: Fileupload

    @Column()
    status: string

    @Column()
    blogtitle: string

    @Column()
    blogname: string

    @Column()
    blogdate: number




}

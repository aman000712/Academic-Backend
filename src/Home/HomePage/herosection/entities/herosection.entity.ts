import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Herosection {


    @PrimaryGeneratedColumn()
    id: number

    @Column( )
    title: string

    @Column()
    subtitle: string

    @Column()
    description: string

    @OneToOne(() => Fileupload)
    @JoinColumn()
    herosectionimageid: Fileupload

}

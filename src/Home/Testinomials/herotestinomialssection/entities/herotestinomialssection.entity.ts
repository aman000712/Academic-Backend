import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Herotestinomialssection {

    @PrimaryGeneratedColumn()
    id: number  

    @Column()
    description: string

    @Column()
    name: string

    @Column()
    position: string


    @OneToOne(() => Fileupload)
    @JoinColumn()
    herotestinomialssectionimage: Fileupload
}

import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Eventsandupdate {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @OneToOne(() => Fileupload)
    @JoinColumn()
    eventimage: Fileupload

    @Column()
    eventstatus:string

    @Column()
    eventdate:number

    @Column()
    eventlocation:string

    @Column()
    eventdescription:string



}

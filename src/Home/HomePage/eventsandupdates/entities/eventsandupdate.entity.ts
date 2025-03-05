import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Eventsandupdate {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Fileupload)
    @JoinColumn()
    eventimageid: Fileupload

    @Column()
    eventstatus:string

    @Column()
    eventdate:number

    @Column()
    eventlocation:string

    @Column()
    eventdescription:string



}

import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Eventsandupdate {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Fileupload)
    @JoinColumn()
    eventimageid: Fileupload

    @Column({default:"this is event"})
    title:string

    @Column()
    eventstatus:string

    @Column()
    eventdate:string

    @Column()
    eventlocation:string

    @Column({type:"longtext"})
    eventdescription:string



}

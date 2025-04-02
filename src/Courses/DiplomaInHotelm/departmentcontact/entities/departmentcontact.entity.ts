import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departmentcontact {


    @PrimaryGeneratedColumn()
    id: number


    @Column()
    title: string

    @Column()
    subtitle: string

    @Column()
    name: string

    @Column()
    position: string

    @Column()
    contactnumber: string

    @Column()
    email: string

    @Column()
    dayandtime: string

    @Column()
    socialmedia: string




}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inquirysection {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    subject: string;
  
    @Column('text')
    message: string;


}

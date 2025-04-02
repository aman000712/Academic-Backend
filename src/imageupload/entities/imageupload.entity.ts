import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Imageupload {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    imageurl: string;
}

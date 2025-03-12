import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";


@Entity()
export class Diplomainhotelmtop {

    @ApiProperty()
    id:number

    @Column()
    title:string;

    @Column('text')
    description:string

    @Column()
    notice:string;

}

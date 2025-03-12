import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateTopprogramDto {


    @ApiProperty()
    subtitle: string;


    @ApiProperty({type:[Number]})
    @IsArray()
    imageid: Number[];


    @ApiProperty()
    title: string;


    @ApiProperty()
    description: string;





}

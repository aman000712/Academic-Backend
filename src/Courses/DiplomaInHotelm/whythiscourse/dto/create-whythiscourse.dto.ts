import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateWhythiscourseDto {


    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string

    @ApiProperty()
    @IsArray()
    majors:string[]



}

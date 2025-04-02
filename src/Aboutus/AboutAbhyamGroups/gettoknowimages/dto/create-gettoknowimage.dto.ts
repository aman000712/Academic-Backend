import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateGettoknowimageDto {


    @ApiProperty({type:[Number]})
    @IsArray()
    imageid: Number[]



}

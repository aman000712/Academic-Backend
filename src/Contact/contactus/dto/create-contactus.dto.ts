import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateContactusDto {




  

    @ApiProperty()
    @IsArray()
    contactnumber: number[];

    @ApiProperty()
    email: string

    @ApiProperty()
    location: string






}

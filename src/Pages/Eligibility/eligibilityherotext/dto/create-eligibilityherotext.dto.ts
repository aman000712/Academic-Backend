import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateEligibilityherotextDto {


    @ApiProperty()
    toptext: string

    @ApiProperty()
    description: string

    @ApiProperty()
    @IsArray()
    options: string[]

    @ApiProperty()
    message: string


}

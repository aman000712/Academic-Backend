import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMilestonesectionDto {

    @ApiProperty()
    count: string;

    @ApiProperty()
    label: string;



 

}

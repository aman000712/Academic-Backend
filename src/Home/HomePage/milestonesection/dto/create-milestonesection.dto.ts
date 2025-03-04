import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMilestonesectionDto {

    @ApiProperty()
    @IsString()
    totalmilestone: number[];

    @ApiProperty()
    @IsString()
    type: string[];




}

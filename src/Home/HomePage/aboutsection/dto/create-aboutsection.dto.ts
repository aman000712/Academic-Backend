import { ApiProperty } from "@nestjs/swagger";

export class CreateAboutsectionDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    subtitle: string;

    @ApiProperty()
    description: string;




}

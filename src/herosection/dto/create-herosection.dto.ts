import { ApiProperty } from "@nestjs/swagger";

export class CreateHerosectionDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    subtitle: string;

    @ApiProperty()
    description: string;

    



}

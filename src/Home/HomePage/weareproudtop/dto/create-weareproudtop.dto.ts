import { ApiProperty } from "@nestjs/swagger";

export class CreateWeareproudtopDto {


    @ApiProperty()
    subtitle: string

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;


}

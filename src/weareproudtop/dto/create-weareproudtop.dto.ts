import { ApiProperty } from "@nestjs/swagger";

export class CreateWeareproudtopDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;


}

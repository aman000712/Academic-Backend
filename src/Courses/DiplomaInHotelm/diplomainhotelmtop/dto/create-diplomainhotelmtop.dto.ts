import { ApiProperty } from "@nestjs/swagger";

export class CreateDiplomainhotelmtopDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    notice: string


}

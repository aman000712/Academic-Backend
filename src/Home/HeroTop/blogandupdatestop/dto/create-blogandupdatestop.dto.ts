import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogandupdatestopDto {

    @ApiProperty()
    subtitle: string

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string



}

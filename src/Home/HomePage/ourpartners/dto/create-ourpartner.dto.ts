import { ApiProperty } from "@nestjs/swagger";

export class CreateOurpartnerDto {

    @ApiProperty()
    subtitle: string


    @ApiProperty()
    title: string

    @ApiProperty()
    description: string


}

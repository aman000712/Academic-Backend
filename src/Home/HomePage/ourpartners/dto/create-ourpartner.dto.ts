import { ApiProperty } from "@nestjs/swagger";

export class CreateOurpartnerDto {

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string

    @ApiProperty()
    logoimage: any



}

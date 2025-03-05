import { ApiProperty } from "@nestjs/swagger";

export class CreateInquirysectionDto {

    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    subject: string

    @ApiProperty()
    message: string




}

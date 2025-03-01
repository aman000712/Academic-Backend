import { ApiProperty } from "@nestjs/swagger";

export class CreateTestinomialDto {

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string

    @ApiProperty()
    name: string

    @ApiProperty()
    testomonialimage: any



}

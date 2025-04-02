import { ApiProperty } from "@nestjs/swagger";

export class CreateTestinomialDto {


    @ApiProperty()
    description: string

    @ApiProperty()
    name: string

    @ApiProperty()
    position: string

    @ApiProperty()
    role: string

    @ApiProperty()
    testomonialimageid: any



}

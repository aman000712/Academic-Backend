import { ApiProperty } from "@nestjs/swagger";

export class CreateTestinomialDto {


    @ApiProperty()
    description: string

    @ApiProperty()
    name: string

    @ApiProperty()
    testomonialimageid: any



}

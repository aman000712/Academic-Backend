import { ApiProperty } from "@nestjs/swagger";


export class CreateEligibilityrelevantquestionDto {


    @ApiProperty()
    question: string

    @ApiProperty()
    answer: string


}

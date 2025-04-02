import { ApiProperty } from "@nestjs/swagger";

export class CreateOurvisionDto {


    @ApiProperty()
    imageid: any;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;





}

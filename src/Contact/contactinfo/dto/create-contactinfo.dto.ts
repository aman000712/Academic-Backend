import { ApiProperty } from "@nestjs/swagger";

export class CreateContactinfoDto {


    @ApiProperty()
    mapurl: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;


}

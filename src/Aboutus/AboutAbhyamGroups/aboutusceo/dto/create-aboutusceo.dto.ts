import { ApiProperty } from "@nestjs/swagger";

export class CreateAboutusceoDto {

    @ApiProperty()
    ceoimageid: any;

    @ApiProperty()
    description: string;

    @ApiProperty()
    ceoname: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    moreinfo: string;




}

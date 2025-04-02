import { ApiProperty } from "@nestjs/swagger";

export class CreateAboutusteamDto {



    @ApiProperty()
    imageid: any;

    @ApiProperty()
    name: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    description: string;


    @ApiProperty()
    facebooklink: string;

    @ApiProperty()
    instagramlink: string;

    @ApiProperty()
    linkedinlink: string;









}

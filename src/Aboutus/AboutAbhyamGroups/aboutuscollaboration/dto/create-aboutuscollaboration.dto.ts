import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class CreateAboutuscollaborationDto {




    @ApiProperty()
    imageid: any;


    @ApiProperty()
    companyname: string

    @ApiProperty()
    companytype: string

    @ApiProperty()
    facebookurl: string

    @ApiProperty()
    instagramurl: string

    @ApiProperty()
    twitterurl: string


    @ApiProperty()
    linkedinurl: string













}

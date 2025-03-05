import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";


export enum PageOptions {
    ABOUT = 'about',
    HOME = 'home',
    COURSES = 'courses',
    CONTACT = 'contact',
}




export class CreateTopHerosectionDto {


    @ApiProperty({
        enum: PageOptions,
        description: "select the page section"
    })
    page: string

    @ApiProperty()
    title: string

    @ApiProperty()
    subtitle: string


    @ApiProperty()
    topimage: any




}

import { ApiProperty } from "@nestjs/swagger";

export class CreatePopularcourseDto {


    @ApiProperty()
    imageid: any;


    @ApiProperty()
    course: string;


    @ApiProperty()
    coursetype: string;

    @ApiProperty()
    coursetitle: string;

    @ApiProperty()
    coursedescription: string;




}

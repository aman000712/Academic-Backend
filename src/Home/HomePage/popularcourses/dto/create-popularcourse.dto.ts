import { ApiProperty } from "@nestjs/swagger";

export class CreatePopularcourseDto {


    @ApiProperty()
    image: any;


    @ApiProperty()
    course: string;


    @ApiProperty()
    coursetype: string;

    @ApiProperty()
    coursetitle: string;

    @ApiProperty()
    coursedescription: string;




}

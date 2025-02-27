import { ApiProperty } from "@nestjs/swagger";

export class CreatePopularcourseDto {


    @ApiProperty()
    title: string;

    @ApiProperty()
    image: any;

    @ApiProperty()
    coursetype: string;

    @ApiProperty()
    coursetitle: string;

    @ApiProperty()
    coursedescription: string;




}

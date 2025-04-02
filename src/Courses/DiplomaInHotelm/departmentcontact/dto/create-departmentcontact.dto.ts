import { ApiProperty } from "@nestjs/swagger"

export class CreateDepartmentcontactDto {



    @ApiProperty()
    title: string

    @ApiProperty()
    subtitle: string

    @ApiProperty()
    name: string

    @ApiProperty()
    position: string

    @ApiProperty()
    contactnumber: string

    @ApiProperty()
    email: string

    @ApiProperty()
    dayandtime: string

    @ApiProperty()
    socialmedia: string







}

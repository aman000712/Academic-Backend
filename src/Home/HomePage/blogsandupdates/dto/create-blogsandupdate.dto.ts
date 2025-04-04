import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogsandupdateDto {


    @ApiProperty()
    blogimageid: any

    @ApiProperty()
    blogtitle: string

    @ApiProperty()
    description: string

    @ApiProperty()
    blogname: string

    @ApiProperty()
    blogdate: string

    @ApiProperty()
    categoryStatusid: number;



}

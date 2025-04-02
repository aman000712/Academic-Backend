import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogsandupdateDto {


    @ApiProperty()
    blogimageid: any

    @ApiProperty()
    status: string

    @ApiProperty()
    blogtitle: string

    @ApiProperty()
    blogname: string

    @ApiProperty()
    blogdate: string



}

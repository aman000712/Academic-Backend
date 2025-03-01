import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogsandupdateDto {

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string

    @ApiProperty()
    blogimage: any

    @ApiProperty()
    status: string

    @ApiProperty()
    blogtitle: string

    @ApiProperty()
    blogname: string

    @ApiProperty()
    blogdate: number



}

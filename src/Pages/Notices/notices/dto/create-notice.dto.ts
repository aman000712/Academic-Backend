import { ApiProperty } from "@nestjs/swagger";

export class CreateNoticeDto {


    @ApiProperty()
    date: string

    @ApiProperty()
    event: string

    @ApiProperty()
    description: string

    @ApiProperty()
    imageid: any





}

import { ApiProperty } from "@nestjs/swagger";

export class CreateTopapplynowDto {


    @ApiProperty()
    page: string

    @ApiProperty()
    title: string

    @ApiProperty()
    subtitle: string


    @ApiProperty()
    topapplynowimage: any



}

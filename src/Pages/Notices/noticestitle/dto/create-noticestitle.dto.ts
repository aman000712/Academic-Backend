import { ApiProperty } from "@nestjs/swagger";

export class CreateNoticestitleDto {


    @ApiProperty()
    title: string

    @ApiProperty()
    subtitle: string



}

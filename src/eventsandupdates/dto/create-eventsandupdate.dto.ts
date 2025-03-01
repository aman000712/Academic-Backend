import { ApiProperty } from "@nestjs/swagger";

export class CreateEventsandupdateDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    eventimage: any

    @ApiProperty()
    eventstatus: string;

    @ApiProperty()
    eventdate: number;

    @ApiProperty()
    eventlocation: string;

    @ApiProperty()
    eventdescription: string;



}

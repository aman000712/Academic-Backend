import { ApiProperty } from "@nestjs/swagger";

export class CreateEventsandupdateDto {


    @ApiProperty()
    eventimageid: any

    @ApiProperty()
    eventstatus: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    eventdate: string;

    @ApiProperty()
    eventlocation: string;

    @ApiProperty()
    eventdescription: string;



}

import { ApiProperty } from "@nestjs/swagger";

export class CreateEventsandupdateDto {


    @ApiProperty()
    eventimageid: any

    @ApiProperty()
    eventstatus: string;

    @ApiProperty()
    eventdate: number;

    @ApiProperty()
    eventlocation: string;

    @ApiProperty()
    eventdescription: string;



}

import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber } from "class-validator";

export class CreateEligibilitycontactinfoDto {


    @ApiProperty()
    imageid: any

    @ApiProperty()
    title: string

    @ApiProperty()
    name:string

    @ApiProperty()
    position:string

    @ApiProperty()
    contactnumber:string

    @ApiProperty()
    email:string

    @ApiProperty()
    dateandtime:string





}

import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsString, isString, Validate } from "class-validator";

export class CreateWhychooseusDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    @IsArray()
    @IsString({each: true})
    options: string[];

    @ApiProperty()
    imageid: any





}

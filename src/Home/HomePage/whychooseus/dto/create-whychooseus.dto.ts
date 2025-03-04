import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, isString, Validate } from "class-validator";

export class CreateWhychooseusDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    @IsArray()
    options: string[];

    @ApiProperty()
    image: any





}

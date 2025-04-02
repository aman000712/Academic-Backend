import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateImageuploadDto {

    @ApiProperty({
        description: 'The URL of the uploaded image.',
      })
      @IsOptional() 
      imageurl: string;
}

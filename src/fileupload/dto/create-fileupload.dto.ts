import { ApiProperty } from "@nestjs/swagger";
import { FileSystemStoredFile, IsFile } from "nestjs-form-data";

export class CreateFileuploadDto {


    @ApiProperty({
        type:'string',
        format:'binary'
    })
    @IsFile()
    images: FileSystemStoredFile


}

import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Matches } from "class-validator";
import { FileSystemStoredFile, IsFile } from "nestjs-form-data";
// import { FileSystemStoredFile, IsFile } from "nestjs-form-data";

export class CreateFileuploadDto {


    @ApiProperty({
        type:'string',
        format:'binary'
    })
    @IsFile()
    // @IsOptional()
    // @IsString()
    // @Matches(/\.(jpg|jpeg|png|gif)$/, { message: 'Only image files are allowed' })
    // @ApiProperty({ type: 'string', format: 'binary', required: false })
    // images: string

    // @IsString()
    // @IsOptional()
    images: FileSystemStoredFile;  


}

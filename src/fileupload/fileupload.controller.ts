// import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, BadRequestException } from '@nestjs/common';
// import { FileuploadService } from './fileupload.service';
// import { CreateFileuploadDto } from './dto/create-fileupload.dto';
// import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
// import { FormDataRequest } from 'nestjs-form-data';
// import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';

// @Controller('fileupload')
// export class FileuploadController {
//   constructor(private readonly fileuploadService: FileuploadService) { }

//   @ApiOperation({ summary: 'Upload a single file' })
//   @ApiConsumes('multipart/form-data')
//   @ApiBody({
//     description: 'Upload a single image file',
//     schema: {
//       type: 'object',
//       properties: {
//         file: { type: 'string', format: 'binary' },
//       },
//     },
//   })
//   @ApiResponse({ status: 201, description: 'File uploaded successfully' })
//   @Post()
//   @UseInterceptors(FileInterceptor('images', {
//     storage: diskStorage({
//       destination: './uploads',
//       filename: (req, file, callback) => {
//         console.log("ya axa")
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         callback(null, uniqueSuffix + extname(file.originalname));
//       },
//     }),
//     fileFilter: (req, file, callback) => {
//       if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
//         return callback(new BadRequestException('Only image files are allowed!'), false);
//       }
//       callback(null, true);
//     },
//     limits: { fileSize: 50 * 1024 * 1024 }, // 5MB Limit
//   }))
//   // @FormDataRequest()
//   // @ApiConsumes('multipart/form-data')
//   create(@Body() createFileuploadDto: CreateFileuploadDto) {
//     console.log("here")
//     return this.fileuploadService.create(createFileuploadDto);
//   }

//   @Get()
//   findAll() {
//     return this.fileuploadService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.fileuploadService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateFileuploadDto: UpdateFileuploadDto) {
//     return this.fileuploadService.update(+id, updateFileuploadDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.fileuploadService.remove(+id);
//   }
// }


import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('fileupload')
export class FileuploadController {
  constructor(private readonly fileuploadService: FileuploadService) {}

  @Post('/upload')
  @FormDataRequest()
  @ApiConsumes('multipart/form-data')
  async create(@Body() createFileuploadDto: CreateFileuploadDto) {
   
    return this.fileuploadService.create(createFileuploadDto);
  }

  @Get()
  findAll() {
    return this.fileuploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileuploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileuploadDto: UpdateFileuploadDto) {
    return this.fileuploadService.update(+id, updateFileuploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileuploadService.remove(+id);
  }
}

// src/fileupload/fileupload.controller.ts
import { Controller, Post, Body, UseInterceptors, UploadedFile, Get, Param, Delete } from '@nestjs/common';
import { ImageuploadService } from './imageupload.service';
import { CreateImageuploadDto } from './dto/create-imageupload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('imageupload')
export class ImageuploadController {
  constructor(private readonly fileuploadService: ImageuploadService) {}
  @Get()
  async findAll() {
    return this.fileuploadService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Upload an image file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload a single image file',
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'File uploaded successfully' })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // You can change the path to absolute path for production
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return callback(new BadRequestException('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
      limits: { fileSize: 80 * 1024 * 1024 }, // Limit file size to 50 MB
    }),
  )
  async create(@UploadedFile() file: Express.Multer.File, @Body() createFileuploadDto: CreateImageuploadDto) {
    console.log(file,"ya xa")
    return this.fileuploadService.create(file, createFileuploadDto);
  }



  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.fileuploadService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.fileuploadService.remove(id);
  }
}

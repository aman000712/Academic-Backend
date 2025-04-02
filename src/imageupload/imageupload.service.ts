// src/fileupload/fileupload.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Imageupload } from './entities/imageupload.entity';
import { CreateImageuploadDto } from './dto/create-imageupload.dto';
import { basename } from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ImageuploadService {
  constructor(
    @InjectRepository(Imageupload)
    private readonly fileuploadRepository: Repository<Imageupload>,
    private readonly configService: ConfigService,
  ) {}

  async create(file: Express.Multer.File, createFileuploadDto: CreateImageuploadDto) {
    const fileName = basename(file.path);
    const baseUrl = this.configService.get<string>('ImageUrl');
    const fileUrl = `${baseUrl}${fileName}`;

    const fileupload = this.fileuploadRepository.create({
      imageurl: fileUrl,
    });

    return this.fileuploadRepository.save(fileupload);
  }

  async findAll() {
    return this.fileuploadRepository.find();
  }

  async findOne(id: number) {
    const fileupload = await this.fileuploadRepository.findOne({ where: { id } });

    if (!fileupload) {
      throw new NotFoundException(`File with id ${id} not found`);
    }

    return fileupload;
  }

  async remove(id: number) {
    const fileupload = await this.fileuploadRepository.findOne({ where: { id } });

    if (!fileupload) {
      throw new NotFoundException(`File with id ${id} not found`);
    }

    await this.fileuploadRepository.remove(fileupload);
    return { message: `File with id '${id}' deleted successfully.` };
  }
}

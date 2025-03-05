import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileuploadService {


  constructor(
    @InjectRepository(Fileupload) private readonly fileuploadRepository: Repository<Fileupload>,
    private readonly configService: ConfigService
  ) { }



  async create(createFileuploadDto: CreateFileuploadDto) {



    const filePath = createFileuploadDto.images.path;
    const fileName = filePath.split('\\').pop() || filePath.split('/').pop();

    const baseUrl = this.configService.get<string>('imageurl');
    const Url = `${baseUrl}${fileName}`;

    const fileupload = this.fileuploadRepository.create({ imageurl: Url });
    return this.fileuploadRepository.save(fileupload);

  }

  async findAll() {
    return this.fileuploadRepository.find();
  }

  findOne(id: number) {
    return this.fileuploadRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateFileuploadDto: UpdateFileuploadDto) {
    const fileupload = await this.fileuploadRepository.findOne({
      where: {
        id: id
      }
    })

    if (!fileupload) {
      throw new Error('Fileupload not found');
    }

    if (updateFileuploadDto.images) {
      const filePath = updateFileuploadDto.images.path;
      const fileName = filePath.split('\\').pop() || filePath.split('/').pop();
      const baseUrl = this.configService.get<string>('imageurl');
      fileupload.imageurl = `${baseUrl}${fileName}`;
    }



    return this.fileuploadRepository.save(fileupload);
  }

  async remove(id: number) {
    const fileupload = await this.fileuploadRepository.findOne({ where: { id } });

    if (!fileupload) {
      throw new NotFoundException(`File with id '${id}' not found.`);
    }

    await this.fileuploadRepository.delete(id);
    return { message: `File with id '${id}' deleted successfully.` };
  }
}

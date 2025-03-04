import { Injectable } from '@nestjs/common';
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



    const filePath = createFileuploadDto.image.path;
    const fileName = filePath.split('\\').pop() || filePath.split('/').pop(); 

    const baseUrl = this.configService.get<string>('ImageUrl');
    const imageUrl = `${baseUrl}${fileName}`;

    const fileupload = this.fileuploadRepository.create({ image: imageUrl });
    return this.fileuploadRepository.save(fileupload);








    // const fileupload = this.fileuploadRepository.create({
    //   image: createFileuploadDto.image.originalName, 
    // });
    // return this.fileuploadRepository.save(fileupload);
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

    if (updateFileuploadDto.image) {
      fileupload.image = updateFileuploadDto.image.originalName
    }



    return this.fileuploadRepository.save(fileupload);
  }

  remove(id: number) {
    return this.fileuploadRepository.delete(id);
  }
}

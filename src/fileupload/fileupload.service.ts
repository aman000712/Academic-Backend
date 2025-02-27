import { Injectable } from '@nestjs/common';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileuploadService {


  constructor(
    @InjectRepository(Fileupload) private readonly fileuploadRepository: Repository<Fileupload>,
  ) { }



  async create(createFileuploadDto: CreateFileuploadDto) {
    const image = createFileuploadDto.image;
    return this.fileuploadRepository.save({
      image: image.originalName
    });
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
      where:{
        id: id
      }
    })

    if(!fileupload){
      throw new Error('Fileupload not found');
    }

    if(updateFileuploadDto.image){
      fileupload.image = updateFileuploadDto.image.originalName
    }



    return this.fileuploadRepository.save(fileupload);
  }

  remove(id: number) {
    return this.fileuploadRepository.delete(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutuscollaborationDto } from './dto/create-aboutuscollaboration.dto';
import { UpdateAboutuscollaborationDto } from './dto/update-aboutuscollaboration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutuscollaboration } from './entities/aboutuscollaboration.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AboutuscollaborationService {


  constructor(
    @InjectRepository(Aboutuscollaboration) private readonly aboutuscollaborationRepository: Repository<Aboutuscollaboration>,
  ) { }



  async create(createAboutuscollaborationDto: CreateAboutuscollaborationDto) {


    if (createAboutuscollaborationDto.imageid) {
      const imageid = await this.aboutuscollaborationRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createAboutuscollaborationDto.imageid
        }
      }
      )
      if (!imageid) {
        throw new Error('Imageid not found');
      }
    }

    const aboutuscollaboration = this.aboutuscollaborationRepository.create(createAboutuscollaborationDto);


    return this.aboutuscollaborationRepository.save(aboutuscollaboration);
  }

  async findAll() {
    return this.aboutuscollaborationRepository.find({
      relations: ['imageid']
    });
  }

  async findOne(id: number) {
    return this.aboutuscollaborationRepository.findOne({
      where: {
        id: id
      },
      relations: ['imageid']
    });
  }

  async update(id: number, updateAboutuscollaborationDto: UpdateAboutuscollaborationDto) {

    const aboutuscollaboration = await this.aboutuscollaborationRepository.findOne({
      where: {
        id: id
      }
    });


    if (!aboutuscollaboration) {
      throw new NotFoundException('aboutuscollaboration not found');
    }

    

    if (updateAboutuscollaborationDto.imageid) {
      const imageid = await this.aboutuscollaborationRepository.manager.findOne(
        Fileupload, {
        where: { id: updateAboutuscollaborationDto.imageid }
      });
      if (!imageid) {
        throw new Error('Imageid not found');
      }
    }

    Object.assign(aboutuscollaboration, updateAboutuscollaborationDto);


    return this.aboutuscollaborationRepository.save(aboutuscollaboration);
  }

  remove(id: number) {
    return this.aboutuscollaborationRepository.delete(id);
  }
}

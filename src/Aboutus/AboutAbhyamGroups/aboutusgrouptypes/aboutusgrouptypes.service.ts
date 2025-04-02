import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutusgrouptypeDto } from './dto/create-aboutusgrouptype.dto';
import { UpdateAboutusgrouptypeDto } from './dto/update-aboutusgrouptype.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusgrouptype } from './entities/aboutusgrouptype.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AboutusgrouptypesService {


  constructor(
    @InjectRepository(Aboutusgrouptype) private readonly aboutusgrouptypeRepository: Repository<Aboutusgrouptype>,
  ) { }



  async create(createAboutusgrouptypeDto: CreateAboutusgrouptypeDto) {

    const images = await this.aboutusgrouptypeRepository.manager.find(Fileupload, {
      where: {
        id: createAboutusgrouptypeDto.imageid
      }
    })

    if (images.length === 0) {
      throw new NotFoundException("imageid not found");
    }

    const aboutusgrouptype = this.aboutusgrouptypeRepository.create(createAboutusgrouptypeDto);


    return this.aboutusgrouptypeRepository.save(aboutusgrouptype);
  }

  async findAll() {
    return this.aboutusgrouptypeRepository.find({
      relations: ['imageid']
    });
  }

  async update(id: number, updateAboutusgrouptypeDto: UpdateAboutusgrouptypeDto) {

    const aboutusgrouptype = await this.aboutusgrouptypeRepository.findOne({ where: { id: id } });

    if (!aboutusgrouptype) {
      throw new NotFoundException('aboutusgrouptype not found');
    }

    const images = await this.aboutusgrouptypeRepository.manager.find(Fileupload, {
      where: {
        id: updateAboutusgrouptypeDto.imageid
      }
    })

    if (images.length === 0) {
      throw new NotFoundException("imageid not found");
    }

    Object.assign(aboutusgrouptype, updateAboutusgrouptypeDto);


    return this.aboutusgrouptypeRepository.save(aboutusgrouptype);
  }

  remove(id: number) {
    return this.aboutusgrouptypeRepository.delete(id);
  }
}

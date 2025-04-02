import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutusteamDto } from './dto/create-aboutusteam.dto';
import { UpdateAboutusteamDto } from './dto/update-aboutusteam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusteam } from './entities/aboutusteam.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AboutusteamsService {


  constructor(
    @InjectRepository(Aboutusteam) private readonly aboutusteamRepository: Repository<Aboutusteam>,
  ) { }



  async create(createAboutusteamDto: CreateAboutusteamDto) {


    const images = await this.aboutusteamRepository.manager.find(Fileupload, {
      where: {
        id: createAboutusteamDto.imageid
      }
    })

    if (images.length === 0) {
      throw new NotFoundException("imageid not found");
    }

    const aboutusteam = this.aboutusteamRepository.create(createAboutusteamDto);


    return this.aboutusteamRepository.save(aboutusteam);
  }

  async findAll() {
    return await this.aboutusteamRepository.find({
      relations: ['imageid']
    });
  }

  async update(id: number, updateAboutusteamDto: UpdateAboutusteamDto) {


    const aboutusteam = await this.aboutusteamRepository.findOne({ where: { id: id } });

    if (!aboutusteam) {
      throw new NotFoundException('aboutusteam not found');
    }

    const images = await this.aboutusteamRepository.manager.find(Fileupload, {
      where: {
        id: updateAboutusteamDto.imageid
      }
    })

    if (images.length === 0) {
      throw new NotFoundException("imageid not found");
    }


    Object.assign(aboutusteam, updateAboutusteamDto);




    return this.aboutusteamRepository.save(aboutusteam);
  }

  async remove(id: number) {
    return this.aboutusteamRepository.delete(id);
  }
}

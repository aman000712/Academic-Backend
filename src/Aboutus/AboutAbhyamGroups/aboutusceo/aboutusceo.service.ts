import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutusceoDto } from './dto/create-aboutusceo.dto';
import { UpdateAboutusceoDto } from './dto/update-aboutusceo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusceo } from './entities/aboutusceo.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class AboutusceoService {


  constructor(
    @InjectRepository(Aboutusceo) private readonly aboutusceoRepository: Repository<Aboutusceo>,
  ) { }




  async create(createAboutusceoDto: CreateAboutusceoDto) {

    const datas = await this.aboutusceoRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('aboutusceo already exists you can only patch');
    }

    if (createAboutusceoDto.ceoimageid) {

      const ceoimage = await this.aboutusceoRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createAboutusceoDto.ceoimageid
        }
      }
      );
      if (!ceoimage) {
        throw new NotFoundException('ceoimage not found');
      }
    }

    const aboutusceo = this.aboutusceoRepository.create(createAboutusceoDto);


    return this.aboutusceoRepository.save(aboutusceo);
  }

  async findAll() {
    return this.aboutusceoRepository.find({
      relations: ['ceoimageid']
    });
  }


  async update(id: number, updateAboutusceoDto: UpdateAboutusceoDto) {

    const aboutusceo = await this.aboutusceoRepository.findOne({ where: { id: id } });
    if (!aboutusceo) {
      throw new BadRequestException('aboutusceo not found');
    }

    if (updateAboutusceoDto.ceoimageid) {

      const ceoimage = await this.aboutusceoRepository.manager.findOne(
        Fileupload, {
        where: {
          id: updateAboutusceoDto.ceoimageid
        }
      }
      );
      if (!ceoimage) {
        throw new NotFoundException('ceoimageid not found');
      }
    }


    Object.assign(aboutusceo, updateAboutusceoDto);


    return this.aboutusceoRepository.save(aboutusceo);
  }
}

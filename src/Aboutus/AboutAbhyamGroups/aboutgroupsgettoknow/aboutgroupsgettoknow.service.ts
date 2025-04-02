import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAboutgroupsgettoknowDto } from './dto/create-aboutgroupsgettoknow.dto';
import { UpdateAboutgroupsgettoknowDto } from './dto/update-aboutgroupsgettoknow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutgroupsgettoknow } from './entities/aboutgroupsgettoknow.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutgroupsgettoknowService {


  constructor(
    @InjectRepository(Aboutgroupsgettoknow) private readonly aboutgroupsgettoknowRepository: Repository<Aboutgroupsgettoknow>,
  ) { }


  async create(createAboutgroupsgettoknowDto: CreateAboutgroupsgettoknowDto) {

    const datas = await this.aboutgroupsgettoknowRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('aboutgroupsgettoknow already exists you can only patch');
    }
    const aboutgroupsgettoknow = this.aboutgroupsgettoknowRepository.create(createAboutgroupsgettoknowDto);


    return this.aboutgroupsgettoknowRepository.save(aboutgroupsgettoknow);
  }

  async findAll() {
    return this.aboutgroupsgettoknowRepository.find();
  }


  async update(id: number, updateAboutgroupsgettoknowDto: UpdateAboutgroupsgettoknowDto) {


    const aboutgroupsgettoknow = await this.aboutgroupsgettoknowRepository.findOne({ where: { id } });
    if (!aboutgroupsgettoknow) {
      throw new BadRequestException('aboutgroupsgettoknow not found');
    }

    Object.assign(aboutgroupsgettoknow, updateAboutgroupsgettoknowDto);





    return this.aboutgroupsgettoknowRepository.save(aboutgroupsgettoknow);
  }

}

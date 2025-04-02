import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAboutusceosayDto } from './dto/create-aboutusceosay.dto';
import { UpdateAboutusceosayDto } from './dto/update-aboutusceosay.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusceosay } from './entities/aboutusceosay.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutusceosaysService {


  constructor(
    @InjectRepository(Aboutusceosay) private readonly aboutusceosayRepository: Repository<Aboutusceosay>,
  ) { }



  async create(createAboutusceosayDto: CreateAboutusceosayDto) {

    const datas = await this.aboutusceosayRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('aboutusceosay already exists you can only patch');

    }


    const aboutusceosay = this.aboutusceosayRepository.create(createAboutusceosayDto);


    return this.aboutusceosayRepository.save(aboutusceosay);
  }

  findAll() {
    return this.aboutusceosayRepository.find();
  }

  async update(id: number, updateAboutusceosayDto: UpdateAboutusceosayDto) {

    const aboutusceosay = await this.aboutusceosayRepository.findOne({ where: { id: id } });
    if (!aboutusceosay) {
      throw new BadRequestException('aboutusceosay not found');
    }

    Object.assign(aboutusceosay, updateAboutusceosayDto);


    return this.aboutusceosayRepository.save(aboutusceosay);
  }

}

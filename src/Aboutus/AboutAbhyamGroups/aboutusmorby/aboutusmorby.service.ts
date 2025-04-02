import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAboutusmorbyDto } from './dto/create-aboutusmorby.dto';
import { UpdateAboutusmorbyDto } from './dto/update-aboutusmorby.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusmorby } from './entities/aboutusmorby.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutusmorbyService {


  constructor(
    @InjectRepository(Aboutusmorby) private readonly aboutusmorbyRepository: Repository<Aboutusmorby>,
  ) { }



  async create(createAboutusmorbyDto: CreateAboutusmorbyDto) {


    const datas = await this.aboutusmorbyRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('aboutusmorby already exists you can only patch');
    }

    const aboutusmorby = this.aboutusmorbyRepository.create(createAboutusmorbyDto);


    return this.aboutusmorbyRepository.save(aboutusmorby);
  }

  async findAll() {
    return this.aboutusmorbyRepository.find();
  }

  async update(id: number, updateAboutusmorbyDto: UpdateAboutusmorbyDto) {

    const aboutusmorby = await this.aboutusmorbyRepository.findOne({ where: { id: id } });

    if (!aboutusmorby) {
      throw new BadRequestException('aboutusmorby not found');
    }

    Object.assign(aboutusmorby, updateAboutusmorbyDto);



    return this.aboutusmorbyRepository.save(aboutusmorby);
  }
}

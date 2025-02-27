import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutsectionDto } from './dto/create-aboutsection.dto';
import { UpdateAboutsectionDto } from './dto/update-aboutsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutsection } from './entities/aboutsection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutsectionService {

  constructor(
    @InjectRepository(Aboutsection) private readonly aboutsectionRepository: Repository<Aboutsection>,
  ) { }


  async create(createAboutsectionDto: CreateAboutsectionDto) {
    const checkData = await this.aboutsectionRepository.findOne({ where: {} });

    if (checkData) {
      throw new BadRequestException('Hero section already exists. You can only update it.');
    }

    const aboutsection = this.aboutsectionRepository.create(createAboutsectionDto);
    return this.aboutsectionRepository.save(aboutsection);
  }


  findOne(id: number) {
    return this.aboutsectionRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateAboutsectionDto: UpdateAboutsectionDto) {
    const aboutsection = await this.aboutsectionRepository.findOne({ where: { id } });

    if (!aboutsection) {
      throw new NotFoundException('aboutsection not found');
    }

    Object.assign(aboutsection, updateAboutsectionDto);

    return this.aboutsectionRepository.save(aboutsection);
  }

}

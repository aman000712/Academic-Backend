import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHerosectionDto } from './dto/create-herosection.dto';
import { UpdateHerosectionDto } from './dto/update-herosection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Herosection } from './entities/herosection.entity';

@Injectable()
export class HerosectionService {

  constructor(
    @InjectRepository(Herosection) private readonly herosectionRepository: Repository<Herosection>,
  ) { }


  async create(createHerosectionDto: CreateHerosectionDto) {
    const existingData = await this.herosectionRepository.findOne({ where: {} });

    if (existingData) {
      throw new BadRequestException('Hero section already exists. You can only update it.');
    }

    const herosection = this.herosectionRepository.create(createHerosectionDto);
    return this.herosectionRepository.save(herosection);
  }


  findOne(id: number) {
    return this.herosectionRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateHerosectionDto: UpdateHerosectionDto) {

    const herosection = await this.herosectionRepository.findOne({ where: { id } });

    if (!herosection) {
      throw new NotFoundException('herosection not found');
    }

    Object.assign(herosection, updateHerosectionDto);

    return this.herosectionRepository.save(herosection); 

  }


}

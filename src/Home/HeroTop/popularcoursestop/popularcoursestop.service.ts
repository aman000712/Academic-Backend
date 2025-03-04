import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePopularcoursestopDto } from './dto/create-popularcoursestop.dto';
import { UpdatePopularcoursestopDto } from './dto/update-popularcoursestop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Popularcoursestop } from './entities/popularcoursestop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PopularcoursestopService {

  constructor(
    @InjectRepository(Popularcoursestop) private readonly popularcoursestopRepository: Repository<Popularcoursestop>,
  ) { }



  async create(createPopularcoursestopDto: CreatePopularcoursestopDto) {

    const existingdata = await this.popularcoursestopRepository.findOne({ where: {} });

    if (existingdata) {
      throw new BadRequestException('popularcoursestop already exists');
    }
    const popularcoursestop = this.popularcoursestopRepository.create(createPopularcoursestopDto);


    return this.popularcoursestopRepository.save(popularcoursestop);
  }

  findAll() {
    return this.popularcoursestopRepository.find();
  }



  async update(id: number, updatePopularcoursestopDto: UpdatePopularcoursestopDto) {

    const popularcoursestop = await this.popularcoursestopRepository.findOne({ where: { id } });
    if (!popularcoursestop) {
      throw new NotFoundException('popularcoursestop not found');
    }

    Object.assign(popularcoursestop, updatePopularcoursestopDto);


    return this.popularcoursestopRepository.save(popularcoursestop);
  }


}

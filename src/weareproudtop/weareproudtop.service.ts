import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWeareproudtopDto } from './dto/create-weareproudtop.dto';
import { UpdateWeareproudtopDto } from './dto/update-weareproudtop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Weareproudtop } from './entities/weareproudtop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeareproudtopService {

  constructor(
    @InjectRepository(Weareproudtop) private readonly weareproudtopRepository: Repository<Weareproudtop>,
  ) { }


  async create(createWeareproudtopDto: CreateWeareproudtopDto) {

    const data = await this.weareproudtopRepository.findOne({ where: {} });

    if (data) {
      throw new BadRequestException("weareproudtop already exists you can onlly patch it");
    }

    const weareproudtop = this.weareproudtopRepository.create(createWeareproudtopDto);

    return this.weareproudtopRepository.save(weareproudtop);

  }

  findAll() {
    return this.weareproudtopRepository.find();
  }

  async update(id: number, updateWeareproudtopDto: UpdateWeareproudtopDto) {

    const weareproudtop = await this.weareproudtopRepository.findOne({
      where:
      {
        id: id
      }
    });

    if (!weareproudtop) {
      throw new NotFoundException("weareproudtop not found");
    }

    Object.assign(weareproudtop, updateWeareproudtopDto);


    return this.weareproudtopRepository.save(weareproudtop);
  }
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTopprogramDto } from './dto/create-topprogram.dto';
import { UpdateTopprogramDto } from './dto/update-topprogram.dto';
import { Topprogram } from './entities/topprogram.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TopprogramsService {

  constructor(
    @InjectRepository(Topprogram) private readonly topprogramRepository: Repository<Topprogram>,
  ) { }


  async create(createTopprogramDto: CreateTopprogramDto) {
    const existing = await this.topprogramRepository.findOne({ where: {} });
    if (existing) {
      throw new BadRequestException('Topprogram already exists you can only patch');
    }

    const images = await this.topprogramRepository.manager.find(Fileupload, {
      where: { id: In(createTopprogramDto.imageid) },
    });

    if (images.length !== createTopprogramDto.imageid.length) {
      throw new BadRequestException('One or more image IDs not found');
    }

    const topprogram = this.topprogramRepository.create({
      ...createTopprogramDto,
      imageid: images,
    });

    return this.topprogramRepository.save(topprogram);
  }

  async findAll() {
    return this.topprogramRepository.find({
      relations: ['imageid']
    });
  }

  findOne(id: number) {
    return this.topprogramRepository.findOne({
      where: { id: id },
      relations: ['imageid']
    });
  }



  async update(id: number, updateTopprogramDto: UpdateTopprogramDto) {

    const topprogram = await this.topprogramRepository.findOne({
      where: { id: id },
    });

    if (!topprogram) {
      throw new NotFoundException('Topprogram not found');
    }

    if (updateTopprogramDto.title) {
      topprogram.title = updateTopprogramDto.title;
    }
    
    if (updateTopprogramDto.description) {
      topprogram.description = updateTopprogramDto.description;
    }

    if (updateTopprogramDto.subtitle) {
      topprogram.subtitle = updateTopprogramDto.subtitle;
    }

    if (updateTopprogramDto.imageid?.length) {
      const images = await this.topprogramRepository.manager.find(Fileupload, {
        where: { id: In(updateTopprogramDto.imageid) },
      })

      if (images.length !== updateTopprogramDto.imageid.length) {
        throw new NotFoundException('One or more image IDs not found');
      }

      topprogram.imageid = images;
    }



    return await this.topprogramRepository.save(topprogram);

  }


}

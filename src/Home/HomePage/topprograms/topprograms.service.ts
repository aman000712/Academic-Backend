import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTopprogramDto } from './dto/create-topprogram.dto';
import { UpdateTopprogramDto } from './dto/update-topprogram.dto';
import { Topprogram } from './entities/topprogram.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TopprogramsService {

  constructor(
    @InjectRepository(Topprogram) private readonly topprogramRepository: Repository<Topprogram>,
  ) { }


  async create(createTopprogramDto: CreateTopprogramDto) {

    const datas = await this.topprogramRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('topprogram already exists');
    }

    if (createTopprogramDto.imageid) {
      const imageid = await this.topprogramRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createTopprogramDto.imageid
        }
      }
      );
      if (!imageid) {
        throw new BadRequestException('imageid not found');
      }
    }

    const topprogram = this.topprogramRepository.create(createTopprogramDto);


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
      where: {
        id: id
      }
    }
    );
    if (!topprogram) {
      throw new NotFoundException('topprogram not found');
    }

    Object.assign(topprogram, updateTopprogramDto);



    return this.topprogramRepository.save(topprogram);
  }


}

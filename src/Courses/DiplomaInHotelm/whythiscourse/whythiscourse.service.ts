import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWhythiscourseDto } from './dto/create-whythiscourse.dto';
import { UpdateWhythiscourseDto } from './dto/update-whythiscourse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Whythiscourse } from './entities/whythiscourse.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WhythiscourseService {


  constructor(
    @InjectRepository(Whythiscourse) private readonly whythiscourseRepository: Repository<Whythiscourse>,
  ) { }


  async create(createWhythiscourseDto: CreateWhythiscourseDto) {

    const datas = await this.whythiscourseRepository.findOne({ where: {} });
    if (datas) {
      return 'whythiscourse already exists you can only patch';
    }
    const whythiscourse = await this.whythiscourseRepository.create(createWhythiscourseDto);

    return this.whythiscourseRepository.save(whythiscourse);
  }

  async findAll() {
    return await this.whythiscourseRepository.find();
  }

  async update(id: number, updateWhythiscourseDto: UpdateWhythiscourseDto) {

    const whythiscourse = await this.whythiscourseRepository.findOne({ where: { id: id } });
    if (!whythiscourse) {
      throw new NotFoundException('whythiscourse not found');
    }
    Object.assign(whythiscourse, updateWhythiscourseDto);



    return this.whythiscourseRepository.save(whythiscourse);
  }
}

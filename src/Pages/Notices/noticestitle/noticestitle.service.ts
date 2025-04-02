import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNoticestitleDto } from './dto/create-noticestitle.dto';
import { UpdateNoticestitleDto } from './dto/update-noticestitle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticestitle } from './entities/noticestitle.entity';

@Injectable()
export class NoticestitleService {


  constructor(
    @InjectRepository(Noticestitle) private readonly noticestitleRepository: Repository<Noticestitle>,
  ) { }

  async create(createNoticestitleDto: CreateNoticestitleDto) {

    const datas = await this.noticestitleRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('noticestitle already exists you can only patch');
    }

    const noticestitle = this.noticestitleRepository.create(createNoticestitleDto);


    return this.noticestitleRepository.save(noticestitle);
  }

  async findAll() {
    return this.noticestitleRepository.find();
  }


  async update(id: number, updateNoticestitleDto: UpdateNoticestitleDto) {

    const noticestitle = await this.noticestitleRepository.findOne({ where: { id: id } });
    if (!noticestitle) {
      throw new BadRequestException('noticestitle not found');
    }

    Object.assign(noticestitle, updateNoticestitleDto);



    return this.noticestitleRepository.save(noticestitle);
  }

}

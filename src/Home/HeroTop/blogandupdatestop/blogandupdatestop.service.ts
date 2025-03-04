import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogandupdatestopDto } from './dto/create-blogandupdatestop.dto';
import { UpdateBlogandupdatestopDto } from './dto/update-blogandupdatestop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogandupdatestop } from './entities/blogandupdatestop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogandupdatestopService {

  constructor(
    @InjectRepository(Blogandupdatestop) private readonly blogandupdatestopRepository: Repository<Blogandupdatestop>,
  ) { }


  async create(createBlogandupdatestopDto: CreateBlogandupdatestopDto) {

    const datas = await this.blogandupdatestopRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('blogandupdatestop already exists');
    }

    const blogandupdatestop = this.blogandupdatestopRepository.create(createBlogandupdatestopDto);

    return this.blogandupdatestopRepository.save(blogandupdatestop);
  }

  findAll() {
    return this.blogandupdatestopRepository.find();
  }



  async update(id: number, updateBlogandupdatestopDto: UpdateBlogandupdatestopDto) {

    const blogandupdatestop = await this.blogandupdatestopRepository.findOne({ where: { id } });
    if (!blogandupdatestop) {
      throw new NotFoundException('blogandupdatestop not found');
    }

    Object.assign(blogandupdatestop, updateBlogandupdatestopDto);


    return this.blogandupdatestopRepository.save(blogandupdatestop);
  }

}

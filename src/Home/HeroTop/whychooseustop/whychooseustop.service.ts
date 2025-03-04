import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWhychooseustopDto } from './dto/create-whychooseustop.dto';
import { UpdateWhychooseustopDto } from './dto/update-whychooseustop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Whychooseustop } from './entities/whychooseustop.entity';

@Injectable()
export class WhychooseustopService {

  constructor(
    @InjectRepository(Whychooseustop) private readonly whychooseustopRepository: Repository<Whychooseustop>,
  ) { }


  async create(createWhychooseustopDto: CreateWhychooseustopDto) {

    const datas = await this.whychooseustopRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('whychooseustop already exists');
    }
    const whychooseustop = this.whychooseustopRepository.create(createWhychooseustopDto);


    return this.whychooseustopRepository.save(whychooseustop);
  }

  findAll() {
    return this.whychooseustopRepository.find();
  }

  async update(id: number, updateWhychooseustopDto: UpdateWhychooseustopDto) {

    const whychooseustop = await this.whychooseustopRepository.findOne({ where: { id } });
    if (!whychooseustop) {
      throw new BadRequestException('whychooseustop not found');
    }

    Object.assign(whychooseustop, updateWhychooseustopDto);

    return this.whychooseustopRepository.save(whychooseustop);
  }

}

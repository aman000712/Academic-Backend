import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHerotestinomialstopDto } from './dto/create-herotestinomialstop.dto';
import { UpdateHerotestinomialstopDto } from './dto/update-herotestinomialstop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Herotestinomialstop } from './entities/herotestinomialstop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HerotestinomialstopService {


  constructor(
    @InjectRepository(Herotestinomialstop) private readonly herotestinomialstopRepository: Repository<Herotestinomialstop>,
  ) { }

  async create(createHerotestinomialstopDto: CreateHerotestinomialstopDto) {

    const datas = await this.herotestinomialstopRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('herotestinomialstop already exists you can only patch');
    }

    const herotestinomialstop = this.herotestinomialstopRepository.create(createHerotestinomialstopDto);



    return this.herotestinomialstopRepository.save(herotestinomialstop);
  }

  async findAll() {
    return this.herotestinomialstopRepository.find();
  }



  async update(id: number, updateHerotestinomialstopDto: UpdateHerotestinomialstopDto) {

    const herotestinomialstop = await this.herotestinomialstopRepository.findOne({ where: { id } });
    if (!herotestinomialstop) {
      throw new NotFoundException('herotestinomialstop not found');
    }
    Object.assign(herotestinomialstop, updateHerotestinomialstopDto);

    return this.herotestinomialstopRepository.save(herotestinomialstop);
  }


}

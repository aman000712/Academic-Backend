import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestinomialstopDto } from './dto/create-testinomialstop.dto';
import { UpdateTestinomialstopDto } from './dto/update-testinomialstop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testinomialstop } from './entities/testinomialstop.entity';

@Injectable()
export class TestinomialstopService {

  constructor(
    @InjectRepository(Testinomialstop) private readonly testinomialstopRepository: Repository<Testinomialstop>,
  ) { }


  async create(createTestinomialstopDto: CreateTestinomialstopDto) {

    const existingdata = await this.testinomialstopRepository.findOne({ where: {} });

    if (existingdata) {
      throw new BadRequestException('testinomialstop already exists you can only patch');
    }

    const testinomialstop = this.testinomialstopRepository.create(createTestinomialstopDto);


    return this.testinomialstopRepository.save(testinomialstop);
  }

  findAll() {
    return this.testinomialstopRepository.find();
  }



  async update(id: number, updateTestinomialstopDto: UpdateTestinomialstopDto) {

    const testinomialstop = await this.testinomialstopRepository.findOne({ where: { id } });
    if (!testinomialstop) {
      throw new NotFoundException('testinomialstop not found');
    }

    Object.assign(testinomialstop, updateTestinomialstopDto);


    return this.testinomialstopRepository.save(testinomialstop); ;
  }
}

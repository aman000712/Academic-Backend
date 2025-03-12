import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEligibilityherotextDto } from './dto/create-eligibilityherotext.dto';
import { UpdateEligibilityherotextDto } from './dto/update-eligibilityherotext.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eligibilityherotext } from './entities/eligibilityherotext.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EligibilityherotextService {

  constructor(
    @InjectRepository(Eligibilityherotext) private readonly eligibilityherotextRepository: Repository<Eligibilityherotext>,
  ) { }


  async create(createEligibilityherotextDto: CreateEligibilityherotextDto) {

    const data = await this.eligibilityherotextRepository.findOne({ where: {} });

    if (data) {
      throw new BadRequestException('Eligibilityherotext already exists you can only patch');
    }

    const newEligibilityherotext = this.eligibilityherotextRepository.create(createEligibilityherotextDto);

    return this.eligibilityherotextRepository.save(newEligibilityherotext);
  }

  async findAll() {
    return this.eligibilityherotextRepository.find();
  }

  findOne(id: number) {
    return this.eligibilityherotextRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateEligibilityherotextDto: UpdateEligibilityherotextDto) {

    const eligibilityherotext = await this.eligibilityherotextRepository.findOne({
      where: {
        id: id
      }
    });

    if (!eligibilityherotext) {
      throw new Error('Eligibilityherotext not found');
    }

    Object.assign(eligibilityherotext, updateEligibilityherotextDto);

    return this.eligibilityherotextRepository.save(eligibilityherotext);
  }

  remove(id: number) {
    return this.eligibilityherotextRepository.delete(id);;
  }
}

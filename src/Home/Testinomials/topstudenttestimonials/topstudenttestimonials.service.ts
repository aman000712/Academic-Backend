import { Injectable } from '@nestjs/common';
import { CreateTopstudenttestimonialDto } from './dto/create-topstudenttestimonial.dto';
import { UpdateTopstudenttestimonialDto } from './dto/update-topstudenttestimonial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Topstudenttestimonial } from './entities/topstudenttestimonial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopstudenttestimonialsService {

  constructor(
    @InjectRepository(Topstudenttestimonial) private readonly topstudenttestimonialRepository: Repository<Topstudenttestimonial>,
  ) { }


  async create(createTopstudenttestimonialDto: CreateTopstudenttestimonialDto) {

    const data = await this.topstudenttestimonialRepository.findOne({ where: {} });

    if (data) {
      throw new Error('topstudenttestimonial already exists you can only patch');
    }

    const topstudenttestimonial = this.topstudenttestimonialRepository.create(createTopstudenttestimonialDto);


    return await this.topstudenttestimonialRepository.save(topstudenttestimonial);
  }

  findAll() {
    return this.topstudenttestimonialRepository.find();
  }

  async update(id: number, updateTopstudenttestimonialDto: UpdateTopstudenttestimonialDto) {

    const topstudenttestimonial = await this.topstudenttestimonialRepository.findOne({ where: { id } });
    if (!topstudenttestimonial) {
      throw new Error('topstudenttestimonial not found');
    }

    Object.assign(topstudenttestimonial, updateTopstudenttestimonialDto);


    return this.topstudenttestimonialRepository.save(topstudenttestimonial);
  }

}

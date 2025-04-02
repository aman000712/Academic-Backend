import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEligibilityrelevantquestionDto } from './dto/create-eligibilityrelevantquestion.dto';
import { UpdateEligibilityrelevantquestionDto } from './dto/update-eligibilityrelevantquestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eligibilityrelevantquestion } from './entities/eligibilityrelevantquestion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EligibilityrelevantquestionsService {


  constructor(
    @InjectRepository(Eligibilityrelevantquestion) private readonly eligibilityrelevantquestionRepository: Repository<Eligibilityrelevantquestion>,
  ) { }


  async create(createEligibilityrelevantquestionDto: CreateEligibilityrelevantquestionDto) {

    const eligibilityrelevantquestion =  this.eligibilityrelevantquestionRepository.create(createEligibilityrelevantquestionDto);


    return await this.eligibilityrelevantquestionRepository.save(eligibilityrelevantquestion);
  }

  async findAll() {
    return this.eligibilityrelevantquestionRepository.find();
  }

  findOne(id: number) {
    return this.eligibilityrelevantquestionRepository.findOne({
      where: {
        id: id
      }

    });
  }

  async update(id: number, updateEligibilityrelevantquestionDto: UpdateEligibilityrelevantquestionDto) {

    const eligibilityrelevantquestion = await this.eligibilityrelevantquestionRepository.findOne({ where: { id: id } });
    if (!eligibilityrelevantquestion) {
      throw new NotFoundException('eligibilityrelevantquestion not found');
    }

    Object.assign(eligibilityrelevantquestion, updateEligibilityrelevantquestionDto);


    return this.eligibilityrelevantquestionRepository.save(eligibilityrelevantquestion);
  }

  remove(id: number) {
    return this.eligibilityrelevantquestionRepository.delete(id);
  }
}

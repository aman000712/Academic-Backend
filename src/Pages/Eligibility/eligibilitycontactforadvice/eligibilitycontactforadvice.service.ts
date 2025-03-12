import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEligibilitycontactforadviceDto } from './dto/create-eligibilitycontactforadvice.dto';
import { UpdateEligibilitycontactforadviceDto } from './dto/update-eligibilitycontactforadvice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eligibilitycontactforadvice } from './entities/eligibilitycontactforadvice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EligibilitycontactforadviceService {

  constructor(
    @InjectRepository(Eligibilitycontactforadvice) private readonly eligibilitycontactforadviceRepository: Repository<Eligibilitycontactforadvice>,
  ) { }


  async create(createEligibilitycontactforadviceDto: CreateEligibilitycontactforadviceDto) {

    const datas = await this.eligibilitycontactforadviceRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('eligibilitycontactforadvice already exists you can only patch');
    }

    const eligibilitycontactforadvice = this.eligibilitycontactforadviceRepository.create(createEligibilitycontactforadviceDto);



    return await this.eligibilitycontactforadviceRepository.save(eligibilitycontactforadvice);
  }

  async findAll() {
    return await this.eligibilitycontactforadviceRepository.find();
  }

  async update(id: number, updateEligibilitycontactforadviceDto: UpdateEligibilitycontactforadviceDto) {

    const eligibilitycontactforadvice = await this.eligibilitycontactforadviceRepository.findOne({ where: { id: id } });
    if (!eligibilitycontactforadvice) {
      throw new BadRequestException('eligibilitycontactforadvice not found');
    }

    Object.assign(eligibilitycontactforadvice, updateEligibilitycontactforadviceDto);


    return this.eligibilitycontactforadviceRepository.save(eligibilitycontactforadvice);
  }

}

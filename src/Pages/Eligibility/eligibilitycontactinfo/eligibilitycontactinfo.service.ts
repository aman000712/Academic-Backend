
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEligibilitycontactinfoDto } from './dto/create-eligibilitycontactinfo.dto';
import { UpdateEligibilitycontactinfoDto } from './dto/update-eligibilitycontactinfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { Eligibilitycontactinfo } from './entities/eligibilitycontactinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EligibilitycontactinfoService {

  constructor(
    @InjectRepository(Eligibilitycontactinfo) private readonly eligibilitycontactinfoRepository: Repository<Eligibilitycontactinfo>,
  ) { }


  async create(createEligibilitycontactinfoDto: CreateEligibilitycontactinfoDto) {

    const datas = await this.eligibilitycontactinfoRepository.findOne({ where: {} });

    if (datas) {
      throw new BadRequestException('eligibilitycontactinfo already exists you can only patch');
    }

    const eligibilitycontactinfo = this.eligibilitycontactinfoRepository.create(createEligibilitycontactinfoDto);

    return this.eligibilitycontactinfoRepository.save(eligibilitycontactinfo);
  }

  findAll() {
    return this.eligibilitycontactinfoRepository.find({
      relations: ['imageid']
    });
  }


  async update(id: number, updateEligibilitycontactinfoDto: UpdateEligibilitycontactinfoDto) {


    const eligibilitycontactinfo = await this.eligibilitycontactinfoRepository.findOne({ where: { id: id } });
    if (!eligibilitycontactinfo) {
      throw new NotFoundException('eligibilitycontactinfo not found');
    }

    Object.assign(eligibilitycontactinfo, updateEligibilitycontactinfoDto);


    return this.eligibilitycontactinfoRepository.save(eligibilitycontactinfo);
  }

}

import { Injectable } from '@nestjs/common';
import { CreateInquirysectionDto } from './dto/create-inquirysection.dto';
import { UpdateInquirysectionDto } from './dto/update-inquirysection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inquirysection } from './entities/inquirysection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InquirysectionService {

  constructor(
    @InjectRepository(Inquirysection) private readonly inquirysectionRepository: Repository<Inquirysection>,
  ) { }


  async create(createInquirysectionDto: CreateInquirysectionDto) {
    const inquirysection = this.inquirysectionRepository.create(createInquirysectionDto);
    const savedInquiry = await this.inquirysectionRepository.save(inquirysection);

    if (savedInquiry) {
      return {
        message: 'Inquiry saved successfully!',
        inquiry: savedInquiry,
      };
    } else {
      return {
        message: 'Failed to save inquiry',
      };
    }
  }


  async findAll() {
    return await this.inquirysectionRepository.find();
  }




  

}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEligibilityherosectionDto } from './dto/create-eligibilityherosection.dto';
import { UpdateEligibilityherosectionDto } from './dto/update-eligibilityherosection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eligibilityherosection } from './entities/eligibilityherosection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class EligibilityherosectionService {

  constructor(
    @InjectRepository(Eligibilityherosection)
    private readonly eligibilityherosectionRepository: Repository<Eligibilityherosection>,
  ) { }



  async create(createEligibilityherosectionDto: CreateEligibilityherosectionDto) {

    const datas = await this.eligibilityherosectionRepository.findOne({ where: {} });

    if (datas) {
      throw new BadRequestException('eligibilityherosection already exists you can only patch');
    }

    if (createEligibilityherosectionDto.topimageid) {
      const topimage = await this.eligibilityherosectionRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createEligibilityherosectionDto.topimageid
        }
      });
      if (!topimage) {
        throw new BadRequestException('topimage not found');
      }
    }

    const eligibilityherosection = this.eligibilityherosectionRepository.create(createEligibilityherosectionDto);


    return this.eligibilityherosectionRepository.save(eligibilityherosection);
  }

  async findAll() {
    return this.eligibilityherosectionRepository.find({
      relations: ['topimageid']
    });
  }

  async update(id: number, updateEligibilityherosectionDto: UpdateEligibilityherosectionDto) {

    const eligibilityherosection = await this.eligibilityherosectionRepository.findOne({ where: { id } });

    if (!eligibilityherosection) {
      throw new NotFoundException('eligibilityherosection not found');
    }


    Object.assign(eligibilityherosection, updateEligibilityherosectionDto);


    return this.eligibilityherosectionRepository.save(eligibilityherosection);
  }

}

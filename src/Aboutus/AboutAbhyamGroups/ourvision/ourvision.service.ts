import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOurvisionDto } from './dto/create-ourvision.dto';
import { UpdateOurvisionDto } from './dto/update-ourvision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ourvision } from './entities/ourvision.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurvisionService {


  constructor(
    @InjectRepository(Ourvision) private readonly ourvisionRepository: Repository<Ourvision>,
  ) { }

  async create(createOurvisionDto: CreateOurvisionDto) {

    const datas = await this.ourvisionRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('ourvision already exists you can only patch');
    }


    if (createOurvisionDto.imageid) {
      const imageid = await this.ourvisionRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createOurvisionDto.imageid
        }
      }
      )
      if (!imageid) {
        throw new NotFoundException('Imageid not found');
      }
    }

    const ourvision = this.ourvisionRepository.create(createOurvisionDto);


    return this.ourvisionRepository.save(ourvision);
  }

  async findAll() {
    return this.ourvisionRepository.find({
      relations: ['imageid']
    });
  }

  async update(id: number, updateOurvisionDto: UpdateOurvisionDto) {

    const ourvision = await this.ourvisionRepository.findOne({ where: { id: id } });
    if (!ourvision) {
      throw new NotFoundException('ourvision not found');
    }

    if (updateOurvisionDto.imageid) {
      const imageid = await this.ourvisionRepository.manager.findOne(
        Fileupload, {
        where: {
          id: updateOurvisionDto.imageid
        }
      }
      )
      if (!imageid) {
        throw new NotFoundException('Imageid not found');
      }
    }

    Object.assign(ourvision, updateOurvisionDto);



    return this.ourvisionRepository.save(ourvision);
  }
}

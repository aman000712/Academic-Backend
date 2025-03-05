import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTakeactionnowDto } from './dto/create-takeactionnow.dto';
import { UpdateTakeactionnowDto } from './dto/update-takeactionnow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Takeactionnow } from './entities/takeactionnow.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TakeactionnowService {

  constructor(
    @InjectRepository(Takeactionnow) private readonly takeactionnowRepository: Repository<Takeactionnow>,
  ) { }

  async create(createTakeactionnowDto: CreateTakeactionnowDto) {
    const data = await this.takeactionnowRepository.findOne({ where: {} });
    if (data) {
      throw new BadRequestException('Only one Takeactionnow record is allowed. Use update instead.');
    }

    if (createTakeactionnowDto.imageid) {
      const imageid = await this.takeactionnowRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createTakeactionnowDto.imageid
        }
      }
      );
      if (!imageid) {
        throw new NotFoundException('Image not found');
      }
    }
    const takeactionnow = this.takeactionnowRepository.create(createTakeactionnowDto);

    return this.takeactionnowRepository.save(takeactionnow);
  }

  async findAll() {
    return await this.takeactionnowRepository.find({
      relations: ['imageid']
    });
  }

  async findOne(id: number) {
    return await this.takeactionnowRepository.findOne({
      where: {
        id: id
      },
      relations: ['imageid']
    });
  }

  async update(id: number, updateTakeactionnowDto: UpdateTakeactionnowDto) {

    const takeactionnow = await this.takeactionnowRepository.findOne({
      where: {
        id: id
      }
    });
    if (!takeactionnow) {
      throw new NotFoundException('Takeactionnow not found');
    }

    Object.assign(takeactionnow, updateTakeactionnowDto);


    return this.takeactionnowRepository.save(takeactionnow);
  }


}

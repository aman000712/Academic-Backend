import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMilestonesectionDto } from './dto/create-milestonesection.dto';
import { UpdateMilestonesectionDto } from './dto/update-milestonesection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Milestonesection } from './entities/milestonesection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MilestonesectionService {

  constructor(
    @InjectRepository(Milestonesection) private readonly milestonesectionRepository: Repository<Milestonesection>,
  ) { }


  async create(createMilestonesectionDto: CreateMilestonesectionDto) {
    const milestonesection = this.milestonesectionRepository.create(createMilestonesectionDto);
    return this.milestonesectionRepository.save(milestonesection);
  }


  findAll() {
    return this.milestonesectionRepository.find();
  }


  findOne(id: number) {
    return this.milestonesectionRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateMilestonesectionDto: UpdateMilestonesectionDto) {

    const milestonesection = await this.milestonesectionRepository.findOne({
      where: {
        id: id
      }
    })

    if (!milestonesection) {
      throw new NotFoundException('milestone not found');
    }

    Object.assign(milestonesection, updateMilestonesectionDto);


    return this.milestonesectionRepository.save(milestonesection);
  }


  remove(id: number) {
    return this.milestonesectionRepository.delete(id);
  }

}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHerotestinomialssectionDto } from './dto/create-herotestinomialssection.dto';
import { UpdateHerotestinomialssectionDto } from './dto/update-herotestinomialssection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Herotestinomialssection } from './entities/herotestinomialssection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class HerotestinomialssectionService {

  constructor(
    @InjectRepository(Herotestinomialssection) private readonly  herotestinomialssectionRepository: Repository<Herotestinomialssection>,
  ) { }



  async create(createHerotestinomialssectionDto: CreateHerotestinomialssectionDto) {
    const data = await this.herotestinomialssectionRepository.findOne({ where: {} });
    if (data) {
      throw new BadRequestException('Only one Herotestinomialssection record is allowed. Use update instead.');
    }

    if (createHerotestinomialssectionDto.herotestinomialssectionimageid) {
      const herotestinomialssectionimageid = await this.herotestinomialssectionRepository.manager.findOne(
        Fileupload,
        {
          where: {
            id: createHerotestinomialssectionDto.herotestinomialssectionimageid
          }
        }
      );
      if (!herotestinomialssectionimageid) {
        throw new NotFoundException('herotestinomialssectionimageid not found');
      }
    }

    const herotestinomialssection = this.herotestinomialssectionRepository.create(createHerotestinomialssectionDto);
    return this.herotestinomialssectionRepository.save(herotestinomialssection);
  }

  async findAll() {
    return await this.herotestinomialssectionRepository.find({
      relations: ['herotestinomialssectionimageid']
    });
  }

  findOne(id: number) {
    return this.herotestinomialssectionRepository.findOne({
      where: {
        id: id
      },
      relations: ['herotestinomialssectionimageid']
    });
  }

  async update(id: number, updateHerotestinomialssectionDto: UpdateHerotestinomialssectionDto) {

    const herotestinomialssection = await this.herotestinomialssectionRepository.findOne({
      where: {
        id: id
      }
    });

    if (!herotestinomialssection) {
      throw new NotFoundException('herotestinomialssection not found');
    }

    Object.assign(herotestinomialssection, updateHerotestinomialssectionDto);



    return  this.herotestinomialssectionRepository.save(herotestinomialssection);
  }

}

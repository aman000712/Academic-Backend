import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTheplpDto } from './dto/create-theplp.dto';
import { UpdateTheplpDto } from './dto/update-theplp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Theplp } from './entities/theplp.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TheplpService {


  constructor(
    @InjectRepository(Theplp) private readonly theplpRepository: Repository<Theplp>,
  ) { }


  async create(createTheplpDto: CreateTheplpDto) {

    const data = await this.theplpRepository.findOne({ where: {} });
    if (data) {
      throw new BadRequestException('Only one Theplp record is allowed. Use update instead.');
    }

    if (createTheplpDto.imageid) {
      const imageid = await this.theplpRepository.manager.findOne(
        Fileupload,
        {
          where: {
            id: createTheplpDto.imageid
          }
        }
      );
      if (!imageid) {
        throw new NotFoundException('Image not found');
      }
    }
    const theplp = this.theplpRepository.create(createTheplpDto);


    return this.theplpRepository.save(theplp);
  }

  async findAll() {
    return await this.theplpRepository.find(
      {
        relations: ['imageid']
      }
    );
  }


  async update(id: number, updateTheplpDto: UpdateTheplpDto) {

    const theplp = await this.theplpRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!theplp) {
      throw new NotFoundException('Theplp not found');
    }

    if (updateTheplpDto.imageid) {
      const imageid = await this.theplpRepository.manager.findOne(
        Fileupload,
        {
          where: {
            id: updateTheplpDto.imageid
          }
        }
      );
      if (!imageid) {
        throw new NotFoundException('Image not found');
      }
    }

    Object.assign(theplp, updateTheplpDto);





    return this.theplpRepository.save(theplp);
  }
}

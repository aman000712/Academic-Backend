import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWhychooseusDto } from './dto/create-whychooseus.dto';
import { UpdateWhychooseusDto } from './dto/update-whychooseus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Whychooseus } from './entities/whychooseus.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class WhychooseusService {

  constructor(
    @InjectRepository(Whychooseus) private readonly whychooseusRepository: Repository<Whychooseus>,
  ) { }


  async create(createWhychooseusDto: CreateWhychooseusDto) {


    const finddata = await this.whychooseusRepository.findOne({
      where: {}
    })


    if (finddata) {
      throw new BadRequestException('whychooseus already exists. You can only update it.');
    }


    if (createWhychooseusDto.image) {
      const image = await this.whychooseusRepository.manager.findOne(
        Fileupload, {
        where: { id: createWhychooseusDto.image }
      });
      if (!image) {
        throw new Error('Image not found');
      }
    }
    const whychooseus = this.whychooseusRepository.create(createWhychooseusDto);

    return this.whychooseusRepository.save(whychooseus);



  }


  async findAll() {
    return this.whychooseusRepository.find({
      relations: ['image'],
    });
  }

  async findOne(id: number) {
    return this.whychooseusRepository.findOne({
      where: {
        id: id,
      },
      relations: ['image'],
    });
  }

  async update(id: number, updateWhychooseusDto: UpdateWhychooseusDto) {

    const whychooseus = await this.whychooseusRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!whychooseus) {
      throw new Error('whychooseus not found');
    }

    Object.assign(whychooseus, updateWhychooseusDto);


    return this.whychooseusRepository.save(whychooseus);
  }
}

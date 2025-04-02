import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOurpartnerDto } from './dto/create-ourpartner.dto';
import { UpdateOurpartnerDto } from './dto/update-ourpartner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ourpartner } from './entities/ourpartner.entity';
import { In, Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurpartnersService {
  constructor(
    @InjectRepository(Ourpartner) private readonly ourpartnerRepository: Repository<Ourpartner>,
  ) { }





  async create(createOurpartnerDto: CreateOurpartnerDto) {


    const existingOurpartner = await this.ourpartnerRepository.findOne({ where: {} });
    if (existingOurpartner) {
      throw new BadRequestException('Only one Ourpartner record is allowed. Use update instead.');
    }


    const ourpartner = this.ourpartnerRepository.create(createOurpartnerDto);

    return this.ourpartnerRepository.save(ourpartner);

  }



  async findAll() {
    return await this.ourpartnerRepository.find();
  }


  async findOne(id: number) {
    return await this.ourpartnerRepository.findOne({
      where: {
        id: id
      },
    });
  }

  async update(id: number, updateOurpartnerDto: UpdateOurpartnerDto) {
    const ourpartner = await this.ourpartnerRepository.findOne({ where: { id } });

    if (!ourpartner) {
      throw new NotFoundException('Ourpartner not found');
    }

    Object.assign(ourpartner, updateOurpartnerDto);

    return this.ourpartnerRepository.save(ourpartner);
  }

}

import { Injectable } from '@nestjs/common';
import { CreateOurpartnerDto } from './dto/create-ourpartner.dto';
import { UpdateOurpartnerDto } from './dto/update-ourpartner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ourpartner } from './entities/ourpartner.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurpartnersService {
  constructor(
    @InjectRepository(Ourpartner) private readonly ourpartnerRepository: Repository<Ourpartner>,
  ) { }


  async create(createOurpartnerDto: CreateOurpartnerDto) {

    const existingOurpartner = await this.ourpartnerRepository.findOne({});
    if (existingOurpartner) {
      throw new Error('Only one Ourpartner record is allowed. Use update instead.');
    }
    if (createOurpartnerDto.logoimage) {
      const logoimage = await this.ourpartnerRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createOurpartnerDto.logoimage
        }
      }
      );
      if (!logoimage) {
        throw new Error('Image not found');
      }
    }


    const ourpartner = this.ourpartnerRepository.create(createOurpartnerDto);
    return this.ourpartnerRepository.save(ourpartner);
  }


  async findOne(id: number) {
    return await this.ourpartnerRepository.findOne({
      where: {
        id: id,
      },
      relations: ['logoimage']
    });
  }

  async update(id: number, updateOurpartnerDto: UpdateOurpartnerDto) {

    const ourpartner = await this.ourpartnerRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!ourpartner) {
      throw new Error('ourpartner not found');
    }


    Object.assign(ourpartner, updateOurpartnerDto);


    return this.ourpartnerRepository.save(ourpartner);
  }

}

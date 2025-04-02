import { Injectable } from '@nestjs/common';
import { CreateOurpartnerslogoDto } from './dto/create-ourpartnerslogo.dto';
import { UpdateOurpartnerslogoDto } from './dto/update-ourpartnerslogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ourpartnerslogo } from './entities/ourpartnerslogo.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurpartnerslogosService {

  constructor(
    @InjectRepository(Ourpartnerslogo) private readonly ourpartnerslogoRepository: Repository<Ourpartnerslogo>,
  ) { }



  async create(createOurpartnerslogoDto: CreateOurpartnerslogoDto) {

    if (createOurpartnerslogoDto.logoimageid) {
      const imageid = await this.ourpartnerslogoRepository.manager.findOne(
        Fileupload, {
        where: { id: createOurpartnerslogoDto.logoimageid }
      }
      );
      if (!imageid) {
        throw new Error('Imageid not found');
      }
    }

    const ourpartnerslogo = this.ourpartnerslogoRepository.create(createOurpartnerslogoDto);

    return this.ourpartnerslogoRepository.save(ourpartnerslogo);
  }

  async findAll() {
    return this.ourpartnerslogoRepository.find({
      relations: ['logoimageid'],
    });
  }

  async findOne(id: number) {
    return this.ourpartnerslogoRepository.findOne({
      where: {
        id: id,
      },
      relations: ['logoimageid'],
    });
  }

  async update(id: number, updateOurpartnerslogoDto: UpdateOurpartnerslogoDto) {


    const ourpartnerslogo = await this.ourpartnerslogoRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!ourpartnerslogo) {
      throw new Error('ourpartnerslogo not found');
    }


    if (updateOurpartnerslogoDto.logoimageid) {
      const imageid = await this.ourpartnerslogoRepository.manager.findOne(
        Fileupload, { where: { id: updateOurpartnerslogoDto.logoimageid } }
      );
      if (!imageid) {
        throw new Error('Imageid not found');
      }
    }

    Object.assign(ourpartnerslogo, updateOurpartnerslogoDto);


    return this.ourpartnerslogoRepository.save(ourpartnerslogo);
  }

  remove(id: number) {
    return this.ourpartnerslogoRepository.delete(id);
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactinfoDto } from './dto/create-contactinfo.dto';
import { UpdateContactinfoDto } from './dto/update-contactinfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contactinfo } from './entities/contactinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactinfoService {

  constructor(
    @InjectRepository(Contactinfo) private readonly contactinfoRepository: Repository<Contactinfo>,
  ) { }


  async create(createContactinfoDto: CreateContactinfoDto) {

    const datas = await this.contactinfoRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('contactinfo already exists you can only patch');
    }

    const contactinfo = this.contactinfoRepository.create(createContactinfoDto);



    return this.contactinfoRepository.save(contactinfo);
  }

  async findAll() {
    return this.contactinfoRepository.find();
  }


  async update(id: number, updateContactinfoDto: UpdateContactinfoDto) {

    const contactinfo = await this.contactinfoRepository.findOne({ where: { id} });
    if (!contactinfo) {
      throw new BadRequestException('contactinfo not found');
    }

    Object.assign(contactinfo, updateContactinfoDto);


    return this.contactinfoRepository.save(contactinfo); 
  }

  async remove(id: number) {
    return this.contactinfoRepository.delete(id);
  }
}

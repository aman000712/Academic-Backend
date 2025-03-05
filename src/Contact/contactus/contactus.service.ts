import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contactus } from './entities/contactus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactusService {


  constructor(
    @InjectRepository(Contactus) private readonly contactusRepository: Repository<Contactus>,
  ) { }
  async create(createContactusDto: CreateContactusDto) {

    const datas = await this.contactusRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('contactus already exists');
    }

    const contactus = this.contactusRepository.create(createContactusDto);


    return this.contactusRepository.save(contactus);
  }

  async findAll() {
    return await this.contactusRepository.find();
  }

  findOne(id: number) {
    return this.contactusRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateContactusDto: UpdateContactusDto) {

    const contactus = await this.contactusRepository.findOne({ where: { id: id } });
    if (!contactus) {
      throw new BadRequestException('contactus not found');
    }

    Object.assign(contactus, updateContactusDto);


    return this.contactusRepository.save(contactus);
  }

  remove(id: number) {
    return this.contactusRepository.delete(id);
  }
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventsandupdatestopDto } from './dto/create-eventsandupdatestop.dto';
import { UpdateEventsandupdatestopDto } from './dto/update-eventsandupdatestop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eventsandupdatestop } from './entities/eventsandupdatestop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsandupdatestopService {

  constructor(

    @InjectRepository(Eventsandupdatestop) private readonly eventsandupdatestopRepository: Repository<Eventsandupdatestop>,


  ) { }



  async create(createEventsandupdatestopDto: CreateEventsandupdatestopDto) {

    const datas = await this.eventsandupdatestopRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('eventsandupdatestop already exists');
    }
    const eventsandupdatestop = this.eventsandupdatestopRepository.create(createEventsandupdatestopDto);
    return this.eventsandupdatestopRepository.save(eventsandupdatestop);
  }

  findAll() {
    return this.eventsandupdatestopRepository.find();
  }



  async update(id: number, updateEventsandupdatestopDto: UpdateEventsandupdatestopDto) {

    const eventsandupdatestop = await this.eventsandupdatestopRepository.findOne({ where: { id } });
    if (!eventsandupdatestop) {
      throw new NotFoundException('eventsandupdatestop not found');
    }

    Object.assign(eventsandupdatestop, updateEventsandupdatestopDto);

    return this.eventsandupdatestopRepository.save(eventsandupdatestop);
  }


}

import { Injectable } from '@nestjs/common';
import { CreateEventsandupdateDto } from './dto/create-eventsandupdate.dto';
import { UpdateEventsandupdateDto } from './dto/update-eventsandupdate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eventsandupdate } from './entities/eventsandupdate.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class EventsandupdatesService {

  constructor(
    @InjectRepository(Eventsandupdate) private readonly eventsandupdateRepository: Repository<Eventsandupdate>,
  ) { }




  async create(createEventsandupdateDto: CreateEventsandupdateDto) {
    const eventsandupdate = this.eventsandupdateRepository.create(createEventsandupdateDto);
    if (eventsandupdate.eventimageid) {
      const eventimageid = await this.eventsandupdateRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createEventsandupdateDto.eventimageid
        }
      }
      );
      if (!eventimageid) {
        throw new Error('Fileupload not found');
      }
    }
    return this.eventsandupdateRepository.save(eventsandupdate);
  }

  async findAll() {
    return await this.eventsandupdateRepository.find({
      relations: ['eventimageid']
    });
  }

  async findOne(id: number) {
    return this.eventsandupdateRepository.findOne({
      where: {
        id: id
      },
      relations: ['eventimageid'],
    });
  }

  async update(id: number, updateEventsandupdateDto: UpdateEventsandupdateDto) {
    const eventsandupdate = await this.eventsandupdateRepository.findOne({
      where: {
        id: id
      }
    });


    if (!eventsandupdate) {
      throw new Error('eventsandupdate not found');
    }

    Object.assign(eventsandupdate, updateEventsandupdateDto);
    
    return this.eventsandupdateRepository.save(eventsandupdate);
  }

  remove(id: number) {
    return this.eventsandupdateRepository.delete(id);
  }
}

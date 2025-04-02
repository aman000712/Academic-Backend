import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAboutusgroupDto } from './dto/create-aboutusgroup.dto';
import { UpdateAboutusgroupDto } from './dto/update-aboutusgroup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusgroup } from './entities/aboutusgroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutusgroupService {

  constructor(


    @InjectRepository(Aboutusgroup) private readonly aboutusgroupRepository: Repository<Aboutusgroup>,


  ) { }



  async create(createAboutusgroupDto: CreateAboutusgroupDto) {


    const datas = await this.aboutusgroupRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('aboutusgroup already exists you can only patch');
    }


    const aboutusgroup = this.aboutusgroupRepository.create(createAboutusgroupDto);





    return this.aboutusgroupRepository.save(aboutusgroup);
  }

  async findAll() {
    return this.aboutusgroupRepository.find();
  }


  async update(id: number, updateAboutusgroupDto: UpdateAboutusgroupDto) {



    const aboutusgroup = await this.aboutusgroupRepository.findOne({ where: { id: id } });
    if (!aboutusgroup) {
      throw new BadRequestException('aboutusgroup not found');
    }

    Object.assign(aboutusgroup, updateAboutusgroupDto);






    return this.aboutusgroupRepository.save(aboutusgroup);
  }

}

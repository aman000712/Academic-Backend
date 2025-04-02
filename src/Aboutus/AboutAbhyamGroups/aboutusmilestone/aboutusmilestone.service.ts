import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutusmilestoneDto } from './dto/create-aboutusmilestone.dto';
import { UpdateAboutusmilestoneDto } from './dto/update-aboutusmilestone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutusmilestone } from './entities/aboutusmilestone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutusmilestoneService {

  constructor(
    @InjectRepository(Aboutusmilestone) private readonly aboutusmilestoneRepository: Repository<Aboutusmilestone>,
  ) { }



  async create(createAboutusmilestoneDto: CreateAboutusmilestoneDto) {

    const datas = await this.aboutusmilestoneRepository.findOne({ where: {} });
    if (datas) {
      throw new NotFoundException('aboutusmilestone already exists you can only patch');
    }
    const aboutusmilestone =  this.aboutusmilestoneRepository.create(createAboutusmilestoneDto);



    return this.aboutusmilestoneRepository.save(aboutusmilestone);
  }

 async findAll() {
    return await this.aboutusmilestoneRepository.find();
  }


  async update(id: number, updateAboutusmilestoneDto: UpdateAboutusmilestoneDto) {

    const aboutusmilestone = await this.aboutusmilestoneRepository.findOne({ where: { id: id } });

    if (!aboutusmilestone) {
      throw new NotFoundException('aboutusmilestone not found');
    }

    Object.assign(aboutusmilestone, updateAboutusmilestoneDto);


    return this.aboutusmilestoneRepository.save(aboutusmilestone);
  }

}

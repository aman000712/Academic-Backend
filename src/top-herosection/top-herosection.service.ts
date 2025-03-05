import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTopHerosectionDto } from './dto/create-top-herosection.dto';
import { UpdateTopHerosectionDto } from './dto/update-top-herosection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TopHerosection } from './entities/top-herosection.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TopHerosectionService {

  constructor(
    @InjectRepository(TopHerosection) private readonly topHerosectionRepository: Repository<TopHerosection>,
  ) { }




  async create(createTopHerosectionDto: CreateTopHerosectionDto) {
    createTopHerosectionDto.page = createTopHerosectionDto.page.trim().toLowerCase();
  
    const existingSection = await this.topHerosectionRepository.findOne({ 
      where: { page: createTopHerosectionDto.page } 
    });
  
    if (existingSection) {
      throw new BadRequestException(
        `A section for page '${createTopHerosectionDto.page}' already exists. Use update instead.`
      );
    }
  
    const topherosection = this.topHerosectionRepository.create(createTopHerosectionDto);
  
    if (createTopHerosectionDto.topimage) {
      const image = await this.topHerosectionRepository.manager.findOne(Fileupload, {
        where: { id: createTopHerosectionDto.topimage }
      });
      if (!image) {
        throw new BadRequestException('topimage not found');
      }
      topherosection.topimage = image;
    }
  
    return this.topHerosectionRepository.save(topherosection);
  }

  async findAll(page?: string) {
    const whereCondition = page ? { page: page.trim().toLowerCase() } : {};
    return this.topHerosectionRepository.find({
      where: whereCondition,
      relations: ['topimage'],
    });
  }


  findOne(id: number) {
    return this.topHerosectionRepository.findOne({
      where: {
        id: id
      },
      relations: ['topimage']
    });
  }

  async update(page: string, updateTopHerosectionDto: UpdateTopHerosectionDto) {
    page = page.trim().toLowerCase();
  
    const topherosection = await this.topHerosectionRepository.findOne({ 
      where: { page: page } 
    });
  
    if (!topherosection) {
      throw new NotFoundException(`No section found for page '${page}'`);
    }
  
    if (updateTopHerosectionDto.page && updateTopHerosectionDto.page !== page) {
      throw new BadRequestException('Page name cannot be changed.');
    }
  
    Object.assign(topherosection, updateTopHerosectionDto);
  
    return this.topHerosectionRepository.save(topherosection);
  }
}



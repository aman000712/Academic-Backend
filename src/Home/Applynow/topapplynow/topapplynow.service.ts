import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTopapplynowDto } from './dto/create-topapplynow.dto';
import { UpdateTopapplynowDto } from './dto/update-topapplynow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Topapplynow } from './entities/topapplynow.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TopapplynowService {

  constructor(
    @InjectRepository(Topapplynow) private readonly topapplynowRepository: Repository<Topapplynow>,
  ) { }


  async create(createTopapplynowDto: CreateTopapplynowDto) {



    const existingSection = await this.topapplynowRepository.findOne({ where: { page: createTopapplynowDto.page } });
    if (existingSection) {
      throw new BadRequestException(`A section for page '${createTopapplynowDto.page}' already exists. Use update instead.`);
    }

    const topapplynow = this.topapplynowRepository.create(createTopapplynowDto);

    if (createTopapplynowDto.topapplynowimage) {
      const image = await this.topapplynowRepository.manager.findOne(Fileupload, {
        where: { id: createTopapplynowDto.topapplynowimage }
      });
      if (!image) {
        throw new BadRequestException('topapplynowimage not found');
      }
      topapplynow.topapplynowimage = image;
    }

    return this.topapplynowRepository.save(topapplynow);











    // const datas = await this.topapplynowRepository.findOne({ where: {} });

    // if (datas) {
    //   throw new BadRequestException('Only one Topapplynow record is allowed. Use update instead.');
    // }

    // if (createTopapplynowDto.topapplynowimage) {
    //   const topapplynowimage = await this.topapplynowRepository.manager.findOne(
    //     Fileupload,
    //     {
    //       where: {
    //         id: createTopapplynowDto.topapplynowimage
    //       }
    //     }
    //   );
    //   if (!topapplynowimage) {
    //     throw new BadRequestException('topapplynowimage not found');
    //   }
    // }
    // const topapplynow = this.topapplynowRepository.create(createTopapplynowDto);


    // return this.topapplynowRepository.save(topapplynow);
  }


  async findAll(page?: string) {
    const whereCondition = page ? { page } : {}; // If `page` is provided, filter by it
    return this.topapplynowRepository.find({
      where: whereCondition,
      relations: ['topapplynowimage'],
    });
  }


  findOne(id: number) {
    return this.topapplynowRepository.findOne({
      where: {
        id: id
      },
      relations: ['topapplynowimage']
    });
  }

  async update(id: number, updateTopapplynowDto: UpdateTopapplynowDto) {

    const topapplynow = await this.topapplynowRepository.findOne({
      where: {
        id: id
      }
    });

    if (!topapplynow) {
      throw new NotFoundException('topapplynow not found');
    }

    Object.assign(topapplynow, updateTopapplynowDto);

    return this.topapplynowRepository.save(topapplynow);
  }


}

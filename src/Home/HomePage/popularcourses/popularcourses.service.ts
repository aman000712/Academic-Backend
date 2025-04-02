import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePopularcourseDto } from './dto/create-popularcourse.dto';
import { UpdatePopularcourseDto } from './dto/update-popularcourse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Popularcourse } from './entities/popularcourse.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class PopularcoursesService {

  constructor(
    @InjectRepository(Popularcourse) private readonly popularcourseRepository: Repository<Popularcourse>,
  ) { }



  async create(createPopularcourseDto: CreatePopularcourseDto) {

    const popularcourse = this.popularcourseRepository.create(createPopularcourseDto);

    if (createPopularcourseDto.imageid) {
      const imageid = await this.popularcourseRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createPopularcourseDto.imageid
        }
      }
      );
      if (!imageid) {
        throw new NotFoundException('Image not found');
      }
    }


    return this.popularcourseRepository.save(popularcourse);
  }

  async findAll() {
    return this.popularcourseRepository.find({
      relations: ['imageid'],
    });
  }

  findOne(id: number) {
    return this.popularcourseRepository.findOne({
      where: {
        id: id,
      },
      relations: ['imageid'],
    })
  }

  async update(id: number, updatePopularcourseDto: UpdatePopularcourseDto) {

    const popularcourse = await this.popularcourseRepository.findOne({
      where: {
        id: id,
      },
    });


    if (!popularcourse) {
      throw new NotFoundException('Popularcourse not found');
    }


    if (updatePopularcourseDto.imageid) {
      const imageid = await this.popularcourseRepository.manager.findOne(
        Fileupload, {
        where: {
          id: updatePopularcourseDto.imageid
        }
      }
      );
      if (!imageid) {
        throw new NotFoundException('Image not found');
      }
    }


    Object.assign(popularcourse, updatePopularcourseDto);



    return this.popularcourseRepository.save(popularcourse);
  }

  remove(id: number) {
    return this.popularcourseRepository.delete(id);
  }
}

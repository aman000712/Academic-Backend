import { Injectable } from '@nestjs/common';
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

    if (createPopularcourseDto.image) {
      const image = await this.popularcourseRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createPopularcourseDto.image
        }
      }
      );
      if (!image) {
        throw new Error('Image not found');
      }
    }


    return this.popularcourseRepository.save(popularcourse);
  }

  async findAll() {
    return await this.popularcourseRepository.find({
      relations: ['image'],
    });
  }

  findOne(id: number) {
    return this.popularcourseRepository.findOne({
      where: {
        id: id,
      },
      relations: ['image'],
    })
  }

  async update(id: number, updatePopularcourseDto: UpdatePopularcourseDto) {

    const popularcourse = await this.popularcourseRepository.findOne({
      where: {
        id: id,
      },
    });
    

    if(!popularcourse){
      throw new Error('Popularcourse not found');
    }

    Object.assign(popularcourse, updatePopularcourseDto);



    return this.popularcourseRepository.save(popularcourse);
  }

  remove(id: number) {
    return this.popularcourseRepository.delete(id);
  }
}

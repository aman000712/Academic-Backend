import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudenttestinomialDto } from './dto/create-studenttestinomial.dto';
import { UpdateStudenttestinomialDto } from './dto/update-studenttestinomial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Studenttestinomial } from './entities/studenttestinomial.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class StudenttestinomialsService {


  constructor(
    @InjectRepository(Studenttestinomial) private readonly studenttestinomialRepository: Repository<Studenttestinomial>,
  ) { }


  async create(createStudenttestinomialDto: CreateStudenttestinomialDto) {

    if (createStudenttestinomialDto.studenttestinomialimageid) {
      const studenttestinomialimageid = await this.studenttestinomialRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createStudenttestinomialDto.studenttestinomialimageid
        }
      }
      );
      if (!studenttestinomialimageid) {
        throw new Error('Fileuploadid not found');
      }
    }


    const studenttestinomial = this.studenttestinomialRepository.create(createStudenttestinomialDto);
    return this.studenttestinomialRepository.save(studenttestinomial);
  }

  async findAll() {
    return await this.studenttestinomialRepository.find({
      relations: ['studenttestinomialimageid'],
    });
  }

  findOne(id: number) {
    return this.studenttestinomialRepository.findOne({
      where: {
        id: id
      },
      relations: ['studenttestinomialimageid']
    });
  }

  async update(id: number, updateStudenttestinomialDto: UpdateStudenttestinomialDto) {

    const studenttestinomial = await this.studenttestinomialRepository.findOne({
      where: {
        id: id
      }
    });
    if (!studenttestinomial) {
      throw new Error('studenttestinomial not found');
    }


    if (updateStudenttestinomialDto.studenttestinomialimageid) {
      const studenttestinomialimageid = await this.studenttestinomialRepository.manager.findOne(
        Fileupload, {
        where: {
          id: updateStudenttestinomialDto.studenttestinomialimageid
        }
      }
      );
      if (!studenttestinomialimageid) {
        throw new NotFoundException('Fileuploadid not found');
      }
    }

    Object.assign(studenttestinomial, updateStudenttestinomialDto);


    return this.studenttestinomialRepository.save(studenttestinomial);
  }

  remove(id: number) {
    return this.studenttestinomialRepository.delete(id);
  }
}

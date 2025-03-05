import { Injectable } from '@nestjs/common';
import { CreateTestinomialDto } from './dto/create-testinomial.dto';
import { UpdateTestinomialDto } from './dto/update-testinomial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Testinomial } from './entities/testinomial.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class TestinomialsService {

  constructor(
    @InjectRepository(Testinomial) private readonly testinomialRepository: Repository<Testinomial>,
  ) { }


  async create(createTestinomialDto: CreateTestinomialDto) {

    const testinomial = this.testinomialRepository.create(createTestinomialDto);

    if (createTestinomialDto.testomonialimageid) {
      const testinomialimageid = await this.testinomialRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createTestinomialDto.testomonialimageid
        }
      }
      );
      if (!testinomialimageid) {
        throw new Error('testinomialimageid not found');
      }
    }


    return this.testinomialRepository.save(testinomial);
  }

  async findAll() {
    return await this.testinomialRepository.find({
      relations: ['testomonialimageid']
    })
  }

  async findOne(id: number) {
    return await this.testinomialRepository.findOne({
      where: {
        id: id
      },
      relations: ['testomonialimageid']
    });
  }

  async update(id: number, updateTestinomialDto: UpdateTestinomialDto) {
    const testinomial = await this.testinomialRepository.findOne({
      where: {
        id: id
      }
    });
    if (!testinomial) {
      throw new Error('testinomial not found');
    }

    Object.assign(testinomial, updateTestinomialDto);

    return this.testinomialRepository.save(testinomial);

  }

  remove(id: number) {
    return this.testinomialRepository.delete(id);
  }
}

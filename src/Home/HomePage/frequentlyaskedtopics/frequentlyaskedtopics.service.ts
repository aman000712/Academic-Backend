import { Injectable } from '@nestjs/common';
import { CreateFrequentlyaskedtopicDto } from './dto/create-frequentlyaskedtopic.dto';
import { UpdateFrequentlyaskedtopicDto } from './dto/update-frequentlyaskedtopic.dto';

@Injectable()
export class FrequentlyaskedtopicsService {
  create(createFrequentlyaskedtopicDto: CreateFrequentlyaskedtopicDto) {
    return 'This action adds a new frequentlyaskedtopic';
  }

  findAll() {
    return `This action returns all frequentlyaskedtopics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frequentlyaskedtopic`;
  }

  update(id: number, updateFrequentlyaskedtopicDto: UpdateFrequentlyaskedtopicDto) {
    return `This action updates a #${id} frequentlyaskedtopic`;
  }

  remove(id: number) {
    return `This action removes a #${id} frequentlyaskedtopic`;
  }
}

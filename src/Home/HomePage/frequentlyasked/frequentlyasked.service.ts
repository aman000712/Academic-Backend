import { Injectable } from '@nestjs/common';
import { CreateFrequentlyaskedDto } from './dto/create-frequentlyasked.dto';
import { UpdateFrequentlyaskedDto } from './dto/update-frequentlyasked.dto';

@Injectable()
export class FrequentlyaskedService {
  create(createFrequentlyaskedDto: CreateFrequentlyaskedDto) {
    return 'This action adds a new frequentlyasked';
  }

  findAll() {
    return `This action returns all frequentlyasked`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frequentlyasked`;
  }

  update(id: number, updateFrequentlyaskedDto: UpdateFrequentlyaskedDto) {
    return `This action updates a #${id} frequentlyasked`;
  }

  remove(id: number) {
    return `This action removes a #${id} frequentlyasked`;
  }
}

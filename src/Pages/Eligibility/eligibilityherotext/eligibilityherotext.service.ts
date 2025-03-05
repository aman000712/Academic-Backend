import { Injectable } from '@nestjs/common';
import { CreateEligibilityherotextDto } from './dto/create-eligibilityherotext.dto';
import { UpdateEligibilityherotextDto } from './dto/update-eligibilityherotext.dto';

@Injectable()
export class EligibilityherotextService {
  create(createEligibilityherotextDto: CreateEligibilityherotextDto) {
    return 'This action adds a new eligibilityherotext';
  }

  findAll() {
    return `This action returns all eligibilityherotext`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eligibilityherotext`;
  }

  update(id: number, updateEligibilityherotextDto: UpdateEligibilityherotextDto) {
    return `This action updates a #${id} eligibilityherotext`;
  }

  remove(id: number) {
    return `This action removes a #${id} eligibilityherotext`;
  }
}

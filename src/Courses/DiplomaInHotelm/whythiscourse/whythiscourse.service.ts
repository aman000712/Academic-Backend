import { Injectable } from '@nestjs/common';
import { CreateWhythiscourseDto } from './dto/create-whythiscourse.dto';
import { UpdateWhythiscourseDto } from './dto/update-whythiscourse.dto';

@Injectable()
export class WhythiscourseService {
  create(createWhythiscourseDto: CreateWhythiscourseDto) {
    return 'This action adds a new whythiscourse';
  }

  findAll() {
    return `This action returns all whythiscourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whythiscourse`;
  }

  update(id: number, updateWhythiscourseDto: UpdateWhythiscourseDto) {
    return `This action updates a #${id} whythiscourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} whythiscourse`;
  }
}

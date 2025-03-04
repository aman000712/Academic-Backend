import { Injectable } from '@nestjs/common';
import { CreateCourseoverviewDto } from './dto/create-courseoverview.dto';
import { UpdateCourseoverviewDto } from './dto/update-courseoverview.dto';

@Injectable()
export class CourseoverviewService {
  create(createCourseoverviewDto: CreateCourseoverviewDto) {
    return 'This action adds a new courseoverview';
  }

  findAll() {
    return `This action returns all courseoverview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseoverview`;
  }

  update(id: number, updateCourseoverviewDto: UpdateCourseoverviewDto) {
    return `This action updates a #${id} courseoverview`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseoverview`;
  }
}

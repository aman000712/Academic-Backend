import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseoverviewService } from './courseoverview.service';
import { CreateCourseoverviewDto } from './dto/create-courseoverview.dto';
import { UpdateCourseoverviewDto } from './dto/update-courseoverview.dto';

@Controller('courseoverview')
export class CourseoverviewController {
  constructor(private readonly courseoverviewService: CourseoverviewService) {}

  @Post()
  create(@Body() createCourseoverviewDto: CreateCourseoverviewDto) {
    return this.courseoverviewService.create(createCourseoverviewDto);
  }

  @Get()
  findAll() {
    return this.courseoverviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseoverviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseoverviewDto: UpdateCourseoverviewDto) {
    return this.courseoverviewService.update(+id, updateCourseoverviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseoverviewService.remove(+id);
  }
}

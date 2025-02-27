import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PopularcoursesService } from './popularcourses.service';
import { CreatePopularcourseDto } from './dto/create-popularcourse.dto';
import { UpdatePopularcourseDto } from './dto/update-popularcourse.dto';

@Controller('popularcourses')
export class PopularcoursesController {
  constructor(private readonly popularcoursesService: PopularcoursesService) {}

  @Post()
  create(@Body() createPopularcourseDto: CreatePopularcourseDto) {
    return this.popularcoursesService.create(createPopularcourseDto);
  }

  @Get()
  findAll() {
    return this.popularcoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.popularcoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePopularcourseDto: UpdatePopularcourseDto) {
    return this.popularcoursesService.update(+id, updatePopularcourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.popularcoursesService.remove(+id);
  }
}

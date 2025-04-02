import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhythiscourseService } from './whythiscourse.service';
import { CreateWhythiscourseDto } from './dto/create-whythiscourse.dto';
import { UpdateWhythiscourseDto } from './dto/update-whythiscourse.dto';

@Controller('whythiscourse')
export class WhythiscourseController {
  constructor(private readonly whythiscourseService: WhythiscourseService) {}

  @Post()
  create(@Body() createWhythiscourseDto: CreateWhythiscourseDto) {
    return this.whythiscourseService.create(createWhythiscourseDto);
  }

  @Get()
  findAll() {
    return this.whythiscourseService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhythiscourseDto: UpdateWhythiscourseDto) {
    return this.whythiscourseService.update(+id, updateWhythiscourseDto);
  }

}

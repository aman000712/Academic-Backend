import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticestitleService } from './noticestitle.service';
import { CreateNoticestitleDto } from './dto/create-noticestitle.dto';
import { UpdateNoticestitleDto } from './dto/update-noticestitle.dto';

@Controller('noticestitle')
export class NoticestitleController {
  constructor(private readonly noticestitleService: NoticestitleService) {}

  @Post()
  create(@Body() createNoticestitleDto: CreateNoticestitleDto) {
    return this.noticestitleService.create(createNoticestitleDto);
  }

  @Get()
  findAll() {
    return this.noticestitleService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticestitleDto: UpdateNoticestitleDto) {
    return this.noticestitleService.update(+id, updateNoticestitleDto);
  }
}

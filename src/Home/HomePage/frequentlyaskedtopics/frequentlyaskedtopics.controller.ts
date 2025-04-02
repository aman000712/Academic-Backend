import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrequentlyaskedtopicsService } from './frequentlyaskedtopics.service';
import { CreateFrequentlyaskedtopicDto } from './dto/create-frequentlyaskedtopic.dto';
import { UpdateFrequentlyaskedtopicDto } from './dto/update-frequentlyaskedtopic.dto';

@Controller('frequentlyaskedtopics')
export class FrequentlyaskedtopicsController {
  constructor(private readonly frequentlyaskedtopicsService: FrequentlyaskedtopicsService) {}

  @Post()
  create(@Body() createFrequentlyaskedtopicDto: CreateFrequentlyaskedtopicDto) {
    return this.frequentlyaskedtopicsService.create(createFrequentlyaskedtopicDto);
  }

  @Get()
  findAll() {
    return this.frequentlyaskedtopicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frequentlyaskedtopicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrequentlyaskedtopicDto: UpdateFrequentlyaskedtopicDto) {
    return this.frequentlyaskedtopicsService.update(+id, updateFrequentlyaskedtopicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequentlyaskedtopicsService.remove(+id);
  }
}

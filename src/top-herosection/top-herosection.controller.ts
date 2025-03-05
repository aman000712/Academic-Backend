import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopHerosectionService } from './top-herosection.service';
import { CreateTopHerosectionDto } from './dto/create-top-herosection.dto';
import { UpdateTopHerosectionDto } from './dto/update-top-herosection.dto';

@Controller('top-herosection')
export class TopHerosectionController {
  constructor(private readonly topHerosectionService: TopHerosectionService) { }

  @Post()
  create(@Body() createTopHerosectionDto: CreateTopHerosectionDto) {
    return this.topHerosectionService.create(createTopHerosectionDto);
  }


  @Get('pages/:page',)
  findAll(@Param('page') page: string) {
    return this.topHerosectionService.findAll(page);
  }

  @Get(':id/id')
  findOne(@Param('id') id: string) {
    return this.topHerosectionService.findOne(+id);
  }



  @Patch('page/:page')
  update(@Param('page') page: string, @Body() updateTopHerosectionDto: UpdateTopHerosectionDto) {
    return this.topHerosectionService.update(page, updateTopHerosectionDto);
  }


}

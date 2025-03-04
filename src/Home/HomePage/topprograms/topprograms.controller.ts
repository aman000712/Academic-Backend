import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopprogramsService } from './topprograms.service';
import { CreateTopprogramDto } from './dto/create-topprogram.dto';
import { UpdateTopprogramDto } from './dto/update-topprogram.dto';

@Controller('topprograms')
export class TopprogramsController {
  constructor(private readonly topprogramsService: TopprogramsService) {}

  @Post()
  create(@Body() createTopprogramDto: CreateTopprogramDto) {
    return this.topprogramsService.create(createTopprogramDto);
  }

  @Get()
  findAll() {
    return this.topprogramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topprogramsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopprogramDto: UpdateTopprogramDto) {
    return this.topprogramsService.update(+id, updateTopprogramDto);
  }

}

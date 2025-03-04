import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HerosectionService } from './herosection.service';
import { CreateHerosectionDto } from './dto/create-herosection.dto';
import { UpdateHerosectionDto } from './dto/update-herosection.dto';

@Controller('herosection')
export class HerosectionController {
  constructor(private readonly herosectionService: HerosectionService) {}

  @Post()
  create(@Body() createHerosectionDto: CreateHerosectionDto) {
    return this.herosectionService.create(createHerosectionDto);
  }

  @Get()
  findAll() {
    return this.herosectionService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerosectionDto: UpdateHerosectionDto) {
    return this.herosectionService.update(+id, updateHerosectionDto);
  }
  
}

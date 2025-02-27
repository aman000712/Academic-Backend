import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutsectionService } from './aboutsection.service';
import { CreateAboutsectionDto } from './dto/create-aboutsection.dto';
import { UpdateAboutsectionDto } from './dto/update-aboutsection.dto';

@Controller('aboutsection')
export class AboutsectionController {
  constructor(private readonly aboutsectionService: AboutsectionService) {}

  @Post()
  create(@Body() createAboutsectionDto: CreateAboutsectionDto) {
    return this.aboutsectionService.create(createAboutsectionDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutsectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutsectionDto: UpdateAboutsectionDto) {
    return this.aboutsectionService.update(+id, updateAboutsectionDto);
  }
}

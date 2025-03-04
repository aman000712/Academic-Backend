import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PopularcoursestopService } from './popularcoursestop.service';
import { CreatePopularcoursestopDto } from './dto/create-popularcoursestop.dto';
import { UpdatePopularcoursestopDto } from './dto/update-popularcoursestop.dto';

@Controller('popularcoursestop')
export class PopularcoursestopController {
  constructor(private readonly popularcoursestopService: PopularcoursestopService) {}

  @Post()
  create(@Body() createPopularcoursestopDto: CreatePopularcoursestopDto) {
    return this.popularcoursestopService.create(createPopularcoursestopDto);
  }

  @Get()
  findAll() {
    return this.popularcoursestopService.findAll();
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePopularcoursestopDto: UpdatePopularcoursestopDto) {
    return this.popularcoursestopService.update(+id, updatePopularcoursestopDto);
  }

 
}

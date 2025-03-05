import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeareproudtopService } from './weareproudtop.service';
import { CreateWeareproudtopDto } from './dto/create-weareproudtop.dto';
import { UpdateWeareproudtopDto } from './dto/update-weareproudtop.dto';

@Controller('weareproudtop')
export class WeareproudtopController {
  constructor(private readonly weareproudtopService: WeareproudtopService) {}

  @Post()
  create(@Body() createWeareproudtopDto: CreateWeareproudtopDto) {
    return this.weareproudtopService.create(createWeareproudtopDto);
  }

  @Get()
  findAll() {
    return this.weareproudtopService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeareproudtopDto: UpdateWeareproudtopDto) {
    return this.weareproudtopService.update(+id, updateWeareproudtopDto);
  }
}

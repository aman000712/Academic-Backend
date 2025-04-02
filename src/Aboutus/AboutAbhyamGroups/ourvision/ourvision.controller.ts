import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurvisionService } from './ourvision.service';
import { CreateOurvisionDto } from './dto/create-ourvision.dto';
import { UpdateOurvisionDto } from './dto/update-ourvision.dto';

@Controller('ourvision')
export class OurvisionController {
  constructor(private readonly ourvisionService: OurvisionService) {}

  @Post()
  create(@Body() createOurvisionDto: CreateOurvisionDto) {
    return this.ourvisionService.create(createOurvisionDto);
  }

  @Get()
  findAll() {
    return this.ourvisionService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOurvisionDto: UpdateOurvisionDto) {
    return this.ourvisionService.update(+id, updateOurvisionDto);
  }
}

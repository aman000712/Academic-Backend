import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheplpService } from './theplp.service';
import { CreateTheplpDto } from './dto/create-theplp.dto';
import { UpdateTheplpDto } from './dto/update-theplp.dto';

@Controller('theplp')
export class TheplpController {
  constructor(private readonly theplpService: TheplpService) {}

  @Post()
  create(@Body() createTheplpDto: CreateTheplpDto) {
    return this.theplpService.create(createTheplpDto);
  }

  @Get()
  findAll() {
    return this.theplpService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheplpDto: UpdateTheplpDto) {
    return this.theplpService.update(+id, updateTheplpDto);
  }

}

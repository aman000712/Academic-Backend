import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TakeactionnowService } from './takeactionnow.service';
import { CreateTakeactionnowDto } from './dto/create-takeactionnow.dto';
import { UpdateTakeactionnowDto } from './dto/update-takeactionnow.dto';

@Controller('takeactionnow')
export class TakeactionnowController {
  constructor(private readonly takeactionnowService: TakeactionnowService) {}

  @Post()
  create(@Body() createTakeactionnowDto: CreateTakeactionnowDto) {
    return this.takeactionnowService.create(createTakeactionnowDto);
  }

  @Get()
  findAll() {
    return this.takeactionnowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takeactionnowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTakeactionnowDto: UpdateTakeactionnowDto) {
    return this.takeactionnowService.update(+id, updateTakeactionnowDto);
  }
  
}

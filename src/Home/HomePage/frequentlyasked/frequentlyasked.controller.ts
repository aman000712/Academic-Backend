import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrequentlyaskedService } from './frequentlyasked.service';
import { CreateFrequentlyaskedDto } from './dto/create-frequentlyasked.dto';
import { UpdateFrequentlyaskedDto } from './dto/update-frequentlyasked.dto';

@Controller('frequentlyasked')
export class FrequentlyaskedController {
  constructor(private readonly frequentlyaskedService: FrequentlyaskedService) {}

  @Post()
  create(@Body() createFrequentlyaskedDto: CreateFrequentlyaskedDto) {
    return this.frequentlyaskedService.create(createFrequentlyaskedDto);
  }

  @Get()
  findAll() {
    return this.frequentlyaskedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frequentlyaskedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrequentlyaskedDto: UpdateFrequentlyaskedDto) {
    return this.frequentlyaskedService.update(+id, updateFrequentlyaskedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequentlyaskedService.remove(+id);
  }
}

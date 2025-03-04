import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HerotestinomialssectionService } from './herotestinomialssection.service';
import { CreateHerotestinomialssectionDto } from './dto/create-herotestinomialssection.dto';
import { UpdateHerotestinomialssectionDto } from './dto/update-herotestinomialssection.dto';

@Controller('herotestinomialssection')
export class HerotestinomialssectionController {
  constructor(private readonly herotestinomialssectionService: HerotestinomialssectionService) {}

  @Post()
  create(@Body() createHerotestinomialssectionDto: CreateHerotestinomialssectionDto) {
    return this.herotestinomialssectionService.create(createHerotestinomialssectionDto);
  }

  @Get()
  findAll() {
    return this.herotestinomialssectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herotestinomialssectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerotestinomialssectionDto: UpdateHerotestinomialssectionDto) {
    return this.herotestinomialssectionService.update(+id, updateHerotestinomialssectionDto);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HerotestinomialstopService } from './herotestinomialstop.service';
import { CreateHerotestinomialstopDto } from './dto/create-herotestinomialstop.dto';
import { UpdateHerotestinomialstopDto } from './dto/update-herotestinomialstop.dto';

@Controller('herotestinomialstop')
export class HerotestinomialstopController {
  constructor(private readonly herotestinomialstopService: HerotestinomialstopService) {}

  @Post()
  create(@Body() createHerotestinomialstopDto: CreateHerotestinomialstopDto) {
    return this.herotestinomialstopService.create(createHerotestinomialstopDto);
  }

  @Get()
  findAll() {
    return this.herotestinomialstopService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerotestinomialstopDto: UpdateHerotestinomialstopDto) {
    return this.herotestinomialstopService.update(+id, updateHerotestinomialstopDto);
  }

}

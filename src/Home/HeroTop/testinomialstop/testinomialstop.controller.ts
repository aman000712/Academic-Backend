import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestinomialstopService } from './testinomialstop.service';
import { CreateTestinomialstopDto } from './dto/create-testinomialstop.dto';
import { UpdateTestinomialstopDto } from './dto/update-testinomialstop.dto';

@Controller('testinomialstop')
export class TestinomialstopController {
  constructor(private readonly testinomialstopService: TestinomialstopService) {}

  @Post()
  create(@Body() createTestinomialstopDto: CreateTestinomialstopDto) {
    return this.testinomialstopService.create(createTestinomialstopDto);
  }

  @Get()
  findAll() {
    return this.testinomialstopService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestinomialstopDto: UpdateTestinomialstopDto) {
    return this.testinomialstopService.update(+id, updateTestinomialstopDto);
  }
}

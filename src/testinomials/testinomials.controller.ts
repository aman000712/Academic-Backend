import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestinomialsService } from './testinomials.service';
import { CreateTestinomialDto } from './dto/create-testinomial.dto';
import { UpdateTestinomialDto } from './dto/update-testinomial.dto';

@Controller('testinomials')
export class TestinomialsController {
  constructor(private readonly testinomialsService: TestinomialsService) {}

  @Post()
  create(@Body() createTestinomialDto: CreateTestinomialDto) {
    return this.testinomialsService.create(createTestinomialDto);
  }

  @Get()
  findAll() {
    return this.testinomialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testinomialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestinomialDto: UpdateTestinomialDto) {
    return this.testinomialsService.update(+id, updateTestinomialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testinomialsService.remove(+id);
  }
}

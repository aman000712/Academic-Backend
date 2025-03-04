import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudenttestinomialsService } from './studenttestinomials.service';
import { CreateStudenttestinomialDto } from './dto/create-studenttestinomial.dto';
import { UpdateStudenttestinomialDto } from './dto/update-studenttestinomial.dto';

@Controller('studenttestinomials')
export class StudenttestinomialsController {
  constructor(private readonly studenttestinomialsService: StudenttestinomialsService) {}

  @Post()
  create(@Body() createStudenttestinomialDto: CreateStudenttestinomialDto) {
    return this.studenttestinomialsService.create(createStudenttestinomialDto);
  }

  @Get()
  findAll() {
    return this.studenttestinomialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studenttestinomialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudenttestinomialDto: UpdateStudenttestinomialDto) {
    return this.studenttestinomialsService.update(+id, updateStudenttestinomialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studenttestinomialsService.remove(+id);
  }
}

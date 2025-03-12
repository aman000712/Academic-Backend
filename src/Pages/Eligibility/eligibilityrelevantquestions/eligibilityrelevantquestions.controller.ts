import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EligibilityrelevantquestionsService } from './eligibilityrelevantquestions.service';
import { CreateEligibilityrelevantquestionDto } from './dto/create-eligibilityrelevantquestion.dto';
import { UpdateEligibilityrelevantquestionDto } from './dto/update-eligibilityrelevantquestion.dto';

@Controller('eligibilityrelevantquestions')
export class EligibilityrelevantquestionsController {
  constructor(private readonly eligibilityrelevantquestionsService: EligibilityrelevantquestionsService) {}

  @Post()
  create(@Body() createEligibilityrelevantquestionDto: CreateEligibilityrelevantquestionDto) {
    return this.eligibilityrelevantquestionsService.create(createEligibilityrelevantquestionDto);
  }

  @Get()
  findAll() {
    return this.eligibilityrelevantquestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eligibilityrelevantquestionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEligibilityrelevantquestionDto: UpdateEligibilityrelevantquestionDto) {
    return this.eligibilityrelevantquestionsService.update(+id, updateEligibilityrelevantquestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eligibilityrelevantquestionsService.remove(+id);
  }
}

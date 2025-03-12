import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EligibilityherosectionService } from './eligibilityherosection.service';
import { CreateEligibilityherosectionDto } from './dto/create-eligibilityherosection.dto';
import { UpdateEligibilityherosectionDto } from './dto/update-eligibilityherosection.dto';

@Controller('eligibilityherosection')
export class EligibilityherosectionController {
  constructor(private readonly eligibilityherosectionService: EligibilityherosectionService) {}

  @Post()
  create(@Body() createEligibilityherosectionDto: CreateEligibilityherosectionDto) {
    return this.eligibilityherosectionService.create(createEligibilityherosectionDto);
  }

  @Get()
  findAll() {
    return this.eligibilityherosectionService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEligibilityherosectionDto: UpdateEligibilityherosectionDto) {
    return this.eligibilityherosectionService.update(+id, updateEligibilityherosectionDto);
  }
}

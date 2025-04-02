import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EligibilitycontactforadviceService } from './eligibilitycontactforadvice.service';
import { CreateEligibilitycontactforadviceDto } from './dto/create-eligibilitycontactforadvice.dto';
import { UpdateEligibilitycontactforadviceDto } from './dto/update-eligibilitycontactforadvice.dto';

@Controller('eligibilitycontactforadvice')
export class EligibilitycontactforadviceController {
  constructor(private readonly eligibilitycontactforadviceService: EligibilitycontactforadviceService) {}

  @Post()
  create(@Body() createEligibilitycontactforadviceDto: CreateEligibilitycontactforadviceDto) {
    return this.eligibilitycontactforadviceService.create(createEligibilitycontactforadviceDto);
  }

  @Get()
  findAll() {
    return this.eligibilitycontactforadviceService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEligibilitycontactforadviceDto: UpdateEligibilitycontactforadviceDto) {
    return this.eligibilitycontactforadviceService.update(+id, updateEligibilitycontactforadviceDto);
  }
}

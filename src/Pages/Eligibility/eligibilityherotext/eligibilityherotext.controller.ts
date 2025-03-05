import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EligibilityherotextService } from './eligibilityherotext.service';
import { CreateEligibilityherotextDto } from './dto/create-eligibilityherotext.dto';
import { UpdateEligibilityherotextDto } from './dto/update-eligibilityherotext.dto';

@Controller('eligibilityherotext')
export class EligibilityherotextController {
  constructor(private readonly eligibilityherotextService: EligibilityherotextService) {}

  @Post()
  create(@Body() createEligibilityherotextDto: CreateEligibilityherotextDto) {
    return this.eligibilityherotextService.create(createEligibilityherotextDto);
  }

  @Get()
  findAll() {
    return this.eligibilityherotextService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eligibilityherotextService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEligibilityherotextDto: UpdateEligibilityherotextDto) {
    return this.eligibilityherotextService.update(+id, updateEligibilityherotextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eligibilityherotextService.remove(+id);
  }
}

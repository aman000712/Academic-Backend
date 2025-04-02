import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EligibilitycontactinfoService } from './eligibilitycontactinfo.service';
import { CreateEligibilitycontactinfoDto } from './dto/create-eligibilitycontactinfo.dto';
import { UpdateEligibilitycontactinfoDto } from './dto/update-eligibilitycontactinfo.dto';

@Controller('eligibilitycontactinfo')
export class EligibilitycontactinfoController {
  constructor(private readonly eligibilitycontactinfoService: EligibilitycontactinfoService) {}

  @Post()
  create(@Body() createEligibilitycontactinfoDto: CreateEligibilitycontactinfoDto) {
    return this.eligibilitycontactinfoService.create(createEligibilitycontactinfoDto);
  }

  @Get()
  findAll() {
    return this.eligibilitycontactinfoService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEligibilitycontactinfoDto: UpdateEligibilitycontactinfoDto) {
    return this.eligibilitycontactinfoService.update(+id, updateEligibilitycontactinfoDto);
  }
}

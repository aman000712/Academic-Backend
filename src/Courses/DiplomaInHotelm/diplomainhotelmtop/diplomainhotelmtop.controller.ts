import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiplomainhotelmtopService } from './diplomainhotelmtop.service';
import { CreateDiplomainhotelmtopDto } from './dto/create-diplomainhotelmtop.dto';
import { UpdateDiplomainhotelmtopDto } from './dto/update-diplomainhotelmtop.dto';

@Controller('diplomainhotelmtop')
export class DiplomainhotelmtopController {
  constructor(private readonly diplomainhotelmtopService: DiplomainhotelmtopService) {}

  @Post()
  create(@Body() createDiplomainhotelmtopDto: CreateDiplomainhotelmtopDto) {
    return this.diplomainhotelmtopService.create(createDiplomainhotelmtopDto);
  }

  @Get()
  findAll() {
    return this.diplomainhotelmtopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diplomainhotelmtopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiplomainhotelmtopDto: UpdateDiplomainhotelmtopDto) {
    return this.diplomainhotelmtopService.update(+id, updateDiplomainhotelmtopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diplomainhotelmtopService.remove(+id);
  }
}

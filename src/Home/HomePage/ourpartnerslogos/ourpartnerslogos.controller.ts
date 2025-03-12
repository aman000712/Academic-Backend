import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurpartnerslogosService } from './ourpartnerslogos.service';
import { CreateOurpartnerslogoDto } from './dto/create-ourpartnerslogo.dto';
import { UpdateOurpartnerslogoDto } from './dto/update-ourpartnerslogo.dto';

@Controller('ourpartnerslogos')
export class OurpartnerslogosController {
  constructor(private readonly ourpartnerslogosService: OurpartnerslogosService) {}

  @Post()
  create(@Body() createOurpartnerslogoDto: CreateOurpartnerslogoDto) {
    return this.ourpartnerslogosService.create(createOurpartnerslogoDto);
  }

  @Get()
  findAll() {
    return this.ourpartnerslogosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourpartnerslogosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOurpartnerslogoDto: UpdateOurpartnerslogoDto) {
    return this.ourpartnerslogosService.update(+id, updateOurpartnerslogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourpartnerslogosService.remove(+id);
  }
}

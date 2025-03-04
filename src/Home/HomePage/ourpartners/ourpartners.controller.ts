import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurpartnersService } from './ourpartners.service';
import { CreateOurpartnerDto } from './dto/create-ourpartner.dto';
import { UpdateOurpartnerDto } from './dto/update-ourpartner.dto';

@Controller('ourpartners')
export class OurpartnersController {
  constructor(private readonly ourpartnersService: OurpartnersService) {}

  @Post()
  create(@Body() createOurpartnerDto: CreateOurpartnerDto) {
    return this.ourpartnersService.create(createOurpartnerDto);
  }

  @Get()
  findAll() {
    return this.ourpartnersService.findAll();
  } 


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourpartnersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOurpartnerDto: UpdateOurpartnerDto) {
    return this.ourpartnersService.update(+id, updateOurpartnerDto);
  }
 
}

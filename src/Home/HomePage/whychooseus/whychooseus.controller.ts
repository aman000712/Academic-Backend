import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhychooseusService } from './whychooseus.service';
import { CreateWhychooseusDto } from './dto/create-whychooseus.dto';
import { UpdateWhychooseusDto } from './dto/update-whychooseus.dto';

@Controller('whychooseus')
export class WhychooseusController {
  constructor(private readonly whychooseusService: WhychooseusService) {}

  @Post()
  create(@Body() createWhychooseusDto: CreateWhychooseusDto) {
    return this.whychooseusService.create(createWhychooseusDto);
  }


  @Get()
  findAll() {
    return this.whychooseusService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whychooseusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhychooseusDto: UpdateWhychooseusDto) {
    return this.whychooseusService.update(+id, updateWhychooseusDto);
  }

}

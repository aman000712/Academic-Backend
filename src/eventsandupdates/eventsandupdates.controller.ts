import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsandupdatesService } from './eventsandupdates.service';
import { CreateEventsandupdateDto } from './dto/create-eventsandupdate.dto';
import { UpdateEventsandupdateDto } from './dto/update-eventsandupdate.dto';

@Controller('eventsandupdates')
export class EventsandupdatesController {
  constructor(private readonly eventsandupdatesService: EventsandupdatesService) {}

  @Post()
  create(@Body() createEventsandupdateDto: CreateEventsandupdateDto) {
    return this.eventsandupdatesService.create(createEventsandupdateDto);
  }

  @Get()
  findAll() {
    return this.eventsandupdatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsandupdatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventsandupdateDto: UpdateEventsandupdateDto) {
    return this.eventsandupdatesService.update(+id, updateEventsandupdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsandupdatesService.remove(+id);
  }
}

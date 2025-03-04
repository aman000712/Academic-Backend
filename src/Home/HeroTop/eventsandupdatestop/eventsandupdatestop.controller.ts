import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsandupdatestopService } from './eventsandupdatestop.service';
import { CreateEventsandupdatestopDto } from './dto/create-eventsandupdatestop.dto';
import { UpdateEventsandupdatestopDto } from './dto/update-eventsandupdatestop.dto';

@Controller('eventsandupdatestop')
export class EventsandupdatestopController {
  constructor(private readonly eventsandupdatestopService: EventsandupdatestopService) {}

  @Post()
  create(@Body() createEventsandupdatestopDto: CreateEventsandupdatestopDto) {
    return this.eventsandupdatestopService.create(createEventsandupdatestopDto);
  }

  @Get()
  findAll() {
    return this.eventsandupdatestopService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventsandupdatestopDto: UpdateEventsandupdatestopDto) {
    return this.eventsandupdatestopService.update(+id, updateEventsandupdatestopDto);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopapplynowService } from './topapplynow.service';
import { CreateTopapplynowDto } from './dto/create-topapplynow.dto';
import { UpdateTopapplynowDto } from './dto/update-topapplynow.dto';

@Controller('topapplynow')
export class TopapplynowController {
  constructor(private readonly topapplynowService: TopapplynowService) {}

  @Post()
  create(@Body() createTopapplynowDto: CreateTopapplynowDto) {
    return this.topapplynowService.create(createTopapplynowDto);
  }

  @Get('page/:page')
  findAll(@Param('page') page: string) {
    return this.topapplynowService.findAll(page);
  }

  @Get(':id/id')
  findOne(@Param('id') id: string) {
    return this.topapplynowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopapplynowDto: UpdateTopapplynowDto) {
    return this.topapplynowService.update(+id, updateTopapplynowDto);
  }


}

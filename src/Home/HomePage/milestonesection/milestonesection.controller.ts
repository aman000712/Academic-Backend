import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MilestonesectionService } from './milestonesection.service';
import { CreateMilestonesectionDto } from './dto/create-milestonesection.dto';
import { UpdateMilestonesectionDto } from './dto/update-milestonesection.dto';

@Controller('milestonesection')
export class MilestonesectionController {
  constructor(private readonly milestonesectionService: MilestonesectionService) { }

  @Post()
  create(@Body() createMilestonesectionDto: CreateMilestonesectionDto) {
    return this.milestonesectionService.create(createMilestonesectionDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestonesectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilestonesectionDto: UpdateMilestonesectionDto) {
    return this.milestonesectionService.update(+id, updateMilestonesectionDto);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusgroupService } from './aboutusgroup.service';
import { CreateAboutusgroupDto } from './dto/create-aboutusgroup.dto';
import { UpdateAboutusgroupDto } from './dto/update-aboutusgroup.dto';

@Controller('aboutusgroup')
export class AboutusgroupController {
  constructor(private readonly aboutusgroupService: AboutusgroupService) {}

  @Post()
  create(@Body() createAboutusgroupDto: CreateAboutusgroupDto) {
    return this.aboutusgroupService.create(createAboutusgroupDto);
  }

  @Get()
  findAll() {
    return this.aboutusgroupService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusgroupDto: UpdateAboutusgroupDto) {
    return this.aboutusgroupService.update(+id, updateAboutusgroupDto);
  }
}

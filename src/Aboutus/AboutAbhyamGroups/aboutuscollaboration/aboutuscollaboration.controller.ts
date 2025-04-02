import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutuscollaborationService } from './aboutuscollaboration.service';
import { CreateAboutuscollaborationDto } from './dto/create-aboutuscollaboration.dto';
import { UpdateAboutuscollaborationDto } from './dto/update-aboutuscollaboration.dto';

@Controller('aboutuscollaboration')
export class AboutuscollaborationController {
  constructor(private readonly aboutuscollaborationService: AboutuscollaborationService) {}

  @Post()
  create(@Body() createAboutuscollaborationDto: CreateAboutuscollaborationDto) {
    return this.aboutuscollaborationService.create(createAboutuscollaborationDto);
  }

  @Get()
  findAll() {
    return this.aboutuscollaborationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutuscollaborationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutuscollaborationDto: UpdateAboutuscollaborationDto) {
    return this.aboutuscollaborationService.update(+id, updateAboutuscollaborationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutuscollaborationService.remove(+id);
  }
}

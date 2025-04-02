import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutgroupsgettoknowService } from './aboutgroupsgettoknow.service';
import { CreateAboutgroupsgettoknowDto } from './dto/create-aboutgroupsgettoknow.dto';
import { UpdateAboutgroupsgettoknowDto } from './dto/update-aboutgroupsgettoknow.dto';

@Controller('aboutgroupsgettoknow')
export class AboutgroupsgettoknowController {
  constructor(private readonly aboutgroupsgettoknowService: AboutgroupsgettoknowService) {}

  @Post()
  create(@Body() createAboutgroupsgettoknowDto: CreateAboutgroupsgettoknowDto) {
    return this.aboutgroupsgettoknowService.create(createAboutgroupsgettoknowDto);
  }

  @Get()
  findAll() {
    return this.aboutgroupsgettoknowService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutgroupsgettoknowDto: UpdateAboutgroupsgettoknowDto) {
    return this.aboutgroupsgettoknowService.update(+id, updateAboutgroupsgettoknowDto);
  }

}

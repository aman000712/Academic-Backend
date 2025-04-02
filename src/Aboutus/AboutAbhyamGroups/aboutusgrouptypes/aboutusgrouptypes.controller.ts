import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusgrouptypesService } from './aboutusgrouptypes.service';
import { CreateAboutusgrouptypeDto } from './dto/create-aboutusgrouptype.dto';
import { UpdateAboutusgrouptypeDto } from './dto/update-aboutusgrouptype.dto';

@Controller('aboutusgrouptypes')
export class AboutusgrouptypesController {
  constructor(private readonly aboutusgrouptypesService: AboutusgrouptypesService) {}

  @Post()
  create(@Body() createAboutusgrouptypeDto: CreateAboutusgrouptypeDto) {
    return this.aboutusgrouptypesService.create(createAboutusgrouptypeDto);
  }

  @Get()
  findAll() {
    return this.aboutusgrouptypesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusgrouptypeDto: UpdateAboutusgrouptypeDto) {
    return this.aboutusgrouptypesService.update(+id, updateAboutusgrouptypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutusgrouptypesService.remove(+id);
  }
}

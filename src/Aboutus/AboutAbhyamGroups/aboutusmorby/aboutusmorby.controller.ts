import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusmorbyService } from './aboutusmorby.service';
import { CreateAboutusmorbyDto } from './dto/create-aboutusmorby.dto';
import { UpdateAboutusmorbyDto } from './dto/update-aboutusmorby.dto';

@Controller('aboutusmorby')
export class AboutusmorbyController {
  constructor(private readonly aboutusmorbyService: AboutusmorbyService) {}

  @Post()
  create(@Body() createAboutusmorbyDto: CreateAboutusmorbyDto) {
    return this.aboutusmorbyService.create(createAboutusmorbyDto);
  }

  @Get()
  findAll() {
    return this.aboutusmorbyService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusmorbyDto: UpdateAboutusmorbyDto) {
    return this.aboutusmorbyService.update(+id, updateAboutusmorbyDto);
  }
}

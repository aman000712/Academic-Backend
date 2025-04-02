import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusceoService } from './aboutusceo.service';
import { CreateAboutusceoDto } from './dto/create-aboutusceo.dto';
import { UpdateAboutusceoDto } from './dto/update-aboutusceo.dto';

@Controller('aboutusceo')
export class AboutusceoController {
  constructor(private readonly aboutusceoService: AboutusceoService) {}

  @Post()
  create(@Body() createAboutusceoDto: CreateAboutusceoDto) {
    return this.aboutusceoService.create(createAboutusceoDto);
  }

  @Get()
  findAll() {
    return this.aboutusceoService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusceoDto: UpdateAboutusceoDto) {
    return this.aboutusceoService.update(+id, updateAboutusceoDto);
  }

}

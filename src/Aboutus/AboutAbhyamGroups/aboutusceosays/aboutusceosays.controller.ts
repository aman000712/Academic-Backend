import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusceosaysService } from './aboutusceosays.service';
import { CreateAboutusceosayDto } from './dto/create-aboutusceosay.dto';
import { UpdateAboutusceosayDto } from './dto/update-aboutusceosay.dto';

@Controller('aboutusceosays')
export class AboutusceosaysController {
  constructor(private readonly aboutusceosaysService: AboutusceosaysService) {}

  @Post()
  create(@Body() createAboutusceosayDto: CreateAboutusceosayDto) {
    return this.aboutusceosaysService.create(createAboutusceosayDto);
  }

  @Get()
  findAll() {
    return this.aboutusceosaysService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusceosayDto: UpdateAboutusceosayDto) {
    return this.aboutusceosaysService.update(+id, updateAboutusceosayDto);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusteamsService } from './aboutusteams.service';
import { CreateAboutusteamDto } from './dto/create-aboutusteam.dto';
import { UpdateAboutusteamDto } from './dto/update-aboutusteam.dto';

@Controller('aboutusteams')
export class AboutusteamsController {
  constructor(private readonly aboutusteamsService: AboutusteamsService) {}

  @Post()
  create(@Body() createAboutusteamDto: CreateAboutusteamDto) {
    return this.aboutusteamsService.create(createAboutusteamDto);
  }

  @Get()
  findAll() {
    return this.aboutusteamsService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusteamDto: UpdateAboutusteamDto) {
    return this.aboutusteamsService.update(+id, updateAboutusteamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutusteamsService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogandupdatestopService } from './blogandupdatestop.service';
import { CreateBlogandupdatestopDto } from './dto/create-blogandupdatestop.dto';
import { UpdateBlogandupdatestopDto } from './dto/update-blogandupdatestop.dto';

@Controller('blogandupdatestop')
export class BlogandupdatestopController {
  constructor(private readonly blogandupdatestopService: BlogandupdatestopService) {}

  @Post()
  create(@Body() createBlogandupdatestopDto: CreateBlogandupdatestopDto) {
    return this.blogandupdatestopService.create(createBlogandupdatestopDto);
  }

  @Get()
  findAll() {
    return this.blogandupdatestopService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogandupdatestopDto: UpdateBlogandupdatestopDto) {
    return this.blogandupdatestopService.update(+id, updateBlogandupdatestopDto);
  }

}

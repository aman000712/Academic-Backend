import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhychooseustopService } from './whychooseustop.service';
import { CreateWhychooseustopDto } from './dto/create-whychooseustop.dto';
import { UpdateWhychooseustopDto } from './dto/update-whychooseustop.dto';

@Controller('whychooseustop')
export class WhychooseustopController {
  constructor(private readonly whychooseustopService: WhychooseustopService) {}

  @Post()
  create(@Body() createWhychooseustopDto: CreateWhychooseustopDto) {
    return this.whychooseustopService.create(createWhychooseustopDto);
  }

  @Get()
  findAll() {
    return this.whychooseustopService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhychooseustopDto: UpdateWhychooseustopDto) {
    return this.whychooseustopService.update(+id, updateWhychooseustopDto);
  }
 
}

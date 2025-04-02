import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutusmilestoneService } from './aboutusmilestone.service';
import { CreateAboutusmilestoneDto } from './dto/create-aboutusmilestone.dto';
import { UpdateAboutusmilestoneDto } from './dto/update-aboutusmilestone.dto';

@Controller('aboutusmilestone')
export class AboutusmilestoneController {
  constructor(private readonly aboutusmilestoneService: AboutusmilestoneService) {}

  @Post()
  create(@Body() createAboutusmilestoneDto: CreateAboutusmilestoneDto) {
    return this.aboutusmilestoneService.create(createAboutusmilestoneDto);
  }

  @Get()
  findAll() {
    return this.aboutusmilestoneService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutusmilestoneDto: UpdateAboutusmilestoneDto) {
    return this.aboutusmilestoneService.update(+id, updateAboutusmilestoneDto);
  }
}

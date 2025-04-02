import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopstudenttestimonialsService } from './topstudenttestimonials.service';
import { CreateTopstudenttestimonialDto } from './dto/create-topstudenttestimonial.dto';
import { UpdateTopstudenttestimonialDto } from './dto/update-topstudenttestimonial.dto';

@Controller('topstudenttestimonials')
export class TopstudenttestimonialsController {
  constructor(private readonly topstudenttestimonialsService: TopstudenttestimonialsService) {}

  @Post()
  create(@Body() createTopstudenttestimonialDto: CreateTopstudenttestimonialDto) {
    return this.topstudenttestimonialsService.create(createTopstudenttestimonialDto);
  }

  @Get()
  findAll() {
    return this.topstudenttestimonialsService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopstudenttestimonialDto: UpdateTopstudenttestimonialDto) {
    return this.topstudenttestimonialsService.update(+id, updateTopstudenttestimonialDto);
  }

}

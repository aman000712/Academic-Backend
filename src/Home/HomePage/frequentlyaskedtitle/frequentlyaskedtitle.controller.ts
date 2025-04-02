import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrequentlyaskedtitleService } from './frequentlyaskedtitle.service';
import { CreateFrequentlyaskedtitleDto } from './dto/create-frequentlyaskedtitle.dto';
import { UpdateFrequentlyaskedtitleDto } from './dto/update-frequentlyaskedtitle.dto';

@Controller('frequentlyaskedtitle')
export class FrequentlyaskedtitleController {
  constructor(private readonly frequentlyaskedtitleService: FrequentlyaskedtitleService) {}

  @Post()
  create(@Body() createFrequentlyaskedtitleDto: CreateFrequentlyaskedtitleDto) {
    return this.frequentlyaskedtitleService.create(createFrequentlyaskedtitleDto);
  }

  @Get()
  findAll() {
    return this.frequentlyaskedtitleService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrequentlyaskedtitleDto: UpdateFrequentlyaskedtitleDto) {
    return this.frequentlyaskedtitleService.update(+id, updateFrequentlyaskedtitleDto);
  }
}

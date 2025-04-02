import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GettoknowimagesService } from './gettoknowimages.service';
import { CreateGettoknowimageDto } from './dto/create-gettoknowimage.dto';
import { UpdateGettoknowimageDto } from './dto/update-gettoknowimage.dto';

@Controller('gettoknowimages')
export class GettoknowimagesController {
  constructor(private readonly gettoknowimagesService: GettoknowimagesService) {}

  @Post()
  create(@Body() createGettoknowimageDto: CreateGettoknowimageDto) {
    return this.gettoknowimagesService.create(createGettoknowimageDto);
  }

  @Get()
  findAll() {
    return this.gettoknowimagesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGettoknowimageDto: UpdateGettoknowimageDto) {
    return this.gettoknowimagesService.update(+id, updateGettoknowimageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gettoknowimagesService.remove(+id);
  }
}

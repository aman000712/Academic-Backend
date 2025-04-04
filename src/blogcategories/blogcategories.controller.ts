import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogcategoriesService } from './blogcategories.service';
import { CreateBlogcategoryDto } from './dto/create-blogcategory.dto';
import { UpdateBlogcategoryDto } from './dto/update-blogcategory.dto';

@Controller('blogcategors')
export class BlogcategoriesController {
  constructor(private readonly blogcategoriesService: BlogcategoriesService) {}

  @Post()
  create(@Body() createBlogcategoryDto: CreateBlogcategoryDto) {
    return this.blogcategoriesService.create(createBlogcategoryDto);
  }

  @Get()
  findAll() {
    return this.blogcategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogcategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogcategoryDto: UpdateBlogcategoryDto) {
    return this.blogcategoriesService.update(+id, updateBlogcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogcategoriesService.remove(+id);
  }
}

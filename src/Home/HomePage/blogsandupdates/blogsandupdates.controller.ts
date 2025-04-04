import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogsandupdatesService } from './blogsandupdates.service';
import { CreateBlogsandupdateDto } from './dto/create-blogsandupdate.dto';
import { UpdateBlogsandupdateDto } from './dto/update-blogsandupdate.dto';

@Controller('blogsandupdates')
export class BlogsandupdatesController {
  constructor(private readonly blogsandupdatesService: BlogsandupdatesService) { }

  @Post()
  create(@Body() createBlogsandupdateDto: CreateBlogsandupdateDto) {
    return this.blogsandupdatesService.create(createBlogsandupdateDto);
  }

  @Get()
  findAll() {
    return this.blogsandupdatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsandupdatesService.findOne(+id);
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: string) {
    return this.blogsandupdatesService.findByStatus(status);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogsandupdateDto: UpdateBlogsandupdateDto) {
    return this.blogsandupdatesService.update(+id, updateBlogsandupdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsandupdatesService.remove(+id);
  }
}

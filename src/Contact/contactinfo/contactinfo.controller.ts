import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactinfoService } from './contactinfo.service';
import { CreateContactinfoDto } from './dto/create-contactinfo.dto';
import { UpdateContactinfoDto } from './dto/update-contactinfo.dto';

@Controller('contactinfo')
export class ContactinfoController {
  constructor(private readonly contactinfoService: ContactinfoService) {}

  @Post()
  create(@Body() createContactinfoDto: CreateContactinfoDto) {
    return this.contactinfoService.create(createContactinfoDto);
  }

  @Get()
  findAll() {
    return this.contactinfoService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactinfoDto: UpdateContactinfoDto) {
    return this.contactinfoService.update(+id, updateContactinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactinfoService.remove(+id);
  }
}

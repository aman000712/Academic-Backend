import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentcontactService } from './departmentcontact.service';
import { CreateDepartmentcontactDto } from './dto/create-departmentcontact.dto';
import { UpdateDepartmentcontactDto } from './dto/update-departmentcontact.dto';

@Controller('departmentcontact')
export class DepartmentcontactController {
  constructor(private readonly departmentcontactService: DepartmentcontactService) {}

  @Post()
  create(@Body() createDepartmentcontactDto: CreateDepartmentcontactDto) {
    return this.departmentcontactService.create(createDepartmentcontactDto);
  }

  @Get()
  findAll() {
    return this.departmentcontactService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentcontactDto: UpdateDepartmentcontactDto) {
    return this.departmentcontactService.update(+id, updateDepartmentcontactDto);
  }

}

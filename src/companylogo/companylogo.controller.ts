import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanylogoService } from './companylogo.service';
import { CreateCompanylogoDto } from './dto/create-companylogo.dto';
import { UpdateCompanylogoDto } from './dto/update-companylogo.dto';

@Controller('companylogo')
export class CompanylogoController {
  constructor(private readonly companylogoService: CompanylogoService) {}

  @Post()
  create(@Body() createCompanylogoDto: CreateCompanylogoDto) {
    return this.companylogoService.create(createCompanylogoDto);
  }

  @Get()
  findAll() {
    return this.companylogoService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanylogoDto: UpdateCompanylogoDto) {
    return this.companylogoService.update(+id, updateCompanylogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companylogoService.remove(+id);
  }
}

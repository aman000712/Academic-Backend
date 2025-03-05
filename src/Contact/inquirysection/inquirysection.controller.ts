import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InquirysectionService } from './inquirysection.service';
import { CreateInquirysectionDto } from './dto/create-inquirysection.dto';
import { UpdateInquirysectionDto } from './dto/update-inquirysection.dto';

@Controller('inquirysection')
export class InquirysectionController {
  constructor(private readonly inquirysectionService: InquirysectionService) { }

  @Post()
  create(@Body() createInquirysectionDto: CreateInquirysectionDto) {
    return this.inquirysectionService.create(createInquirysectionDto);
  }

  @Get()
  findAll() {
    return this.inquirysectionService.findAll();
  }



}

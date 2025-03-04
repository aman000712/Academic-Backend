import { Injectable } from '@nestjs/common';
import { CreateDiplomainhotelmtopDto } from './dto/create-diplomainhotelmtop.dto';
import { UpdateDiplomainhotelmtopDto } from './dto/update-diplomainhotelmtop.dto';

@Injectable()
export class DiplomainhotelmtopService {
  create(createDiplomainhotelmtopDto: CreateDiplomainhotelmtopDto) {
    return 'This action adds a new diplomainhotelmtop';
  }

  findAll() {
    return `This action returns all diplomainhotelmtop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diplomainhotelmtop`;
  }

  update(id: number, updateDiplomainhotelmtopDto: UpdateDiplomainhotelmtopDto) {
    return `This action updates a #${id} diplomainhotelmtop`;
  }

  remove(id: number) {
    return `This action removes a #${id} diplomainhotelmtop`;
  }
}

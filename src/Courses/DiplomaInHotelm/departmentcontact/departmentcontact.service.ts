import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentcontactDto } from './dto/create-departmentcontact.dto';
import { UpdateDepartmentcontactDto } from './dto/update-departmentcontact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departmentcontact } from './entities/departmentcontact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentcontactService {

  constructor(
    @InjectRepository(Departmentcontact) private readonly departmentcontactRepository: Repository<Departmentcontact>,
  ) { }


  async create(createDepartmentcontactDto: CreateDepartmentcontactDto) {

    const datas = await this.departmentcontactRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('departmentcontact already exists you can only patch');
    }
    const departmentcontact = await this.departmentcontactRepository.create(createDepartmentcontactDto);


    return this.departmentcontactRepository.save(departmentcontact);
  }

  async findAll() {
    return this.departmentcontactRepository.find();
  }


  async update(id: number, updateDepartmentcontactDto: UpdateDepartmentcontactDto) {

    const departmentcontact = await this.departmentcontactRepository.findOne({ where: { id: id } });
    if (!departmentcontact) {
      throw new NotFoundException('departmentcontact not found');
    }

    Object.assign(departmentcontact, updateDepartmentcontactDto);


    return this.departmentcontactRepository.save(departmentcontact);
  }

}

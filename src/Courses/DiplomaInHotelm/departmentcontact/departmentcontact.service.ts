import { Injectable } from '@nestjs/common';
import { CreateDepartmentcontactDto } from './dto/create-departmentcontact.dto';
import { UpdateDepartmentcontactDto } from './dto/update-departmentcontact.dto';

@Injectable()
export class DepartmentcontactService {
  create(createDepartmentcontactDto: CreateDepartmentcontactDto) {
    return 'This action adds a new departmentcontact';
  }

  findAll() {
    return `This action returns all departmentcontact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentcontact`;
  }

  update(id: number, updateDepartmentcontactDto: UpdateDepartmentcontactDto) {
    return `This action updates a #${id} departmentcontact`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentcontact`;
  }
}

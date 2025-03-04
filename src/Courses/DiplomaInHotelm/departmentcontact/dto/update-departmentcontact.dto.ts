import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentcontactDto } from './create-departmentcontact.dto';

export class UpdateDepartmentcontactDto extends PartialType(CreateDepartmentcontactDto) {}

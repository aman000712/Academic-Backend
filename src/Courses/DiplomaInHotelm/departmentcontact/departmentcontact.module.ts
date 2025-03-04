import { Module } from '@nestjs/common';
import { DepartmentcontactService } from './departmentcontact.service';
import { DepartmentcontactController } from './departmentcontact.controller';

@Module({
  controllers: [DepartmentcontactController],
  providers: [DepartmentcontactService],
})
export class DepartmentcontactModule {}

import { Module } from '@nestjs/common';
import { DepartmentcontactService } from './departmentcontact.service';
import { DepartmentcontactController } from './departmentcontact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departmentcontact } from './entities/departmentcontact.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Departmentcontact
    ])
  ],


  controllers: [DepartmentcontactController],
  providers: [DepartmentcontactService],
})
export class DepartmentcontactModule {}

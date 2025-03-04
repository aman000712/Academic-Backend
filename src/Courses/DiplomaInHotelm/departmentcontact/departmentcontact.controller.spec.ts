import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentcontactController } from './departmentcontact.controller';
import { DepartmentcontactService } from './departmentcontact.service';

describe('DepartmentcontactController', () => {
  let controller: DepartmentcontactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentcontactController],
      providers: [DepartmentcontactService],
    }).compile();

    controller = module.get<DepartmentcontactController>(DepartmentcontactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

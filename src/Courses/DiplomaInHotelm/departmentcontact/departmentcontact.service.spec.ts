import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentcontactService } from './departmentcontact.service';

describe('DepartmentcontactService', () => {
  let service: DepartmentcontactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentcontactService],
    }).compile();

    service = module.get<DepartmentcontactService>(DepartmentcontactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

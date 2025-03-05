import { Test, TestingModule } from '@nestjs/testing';
import { CompanylogoService } from './companylogo.service';

describe('CompanylogoService', () => {
  let service: CompanylogoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanylogoService],
    }).compile();

    service = module.get<CompanylogoService>(CompanylogoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

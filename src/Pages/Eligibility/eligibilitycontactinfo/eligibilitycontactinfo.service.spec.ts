import { Test, TestingModule } from '@nestjs/testing';
import { EligibilitycontactinfoService } from './eligibilitycontactinfo.service';

describe('EligibilitycontactinfoService', () => {
  let service: EligibilitycontactinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EligibilitycontactinfoService],
    }).compile();

    service = module.get<EligibilitycontactinfoService>(EligibilitycontactinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

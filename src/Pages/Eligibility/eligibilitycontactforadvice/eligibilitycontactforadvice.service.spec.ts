import { Test, TestingModule } from '@nestjs/testing';
import { EligibilitycontactforadviceService } from './eligibilitycontactforadvice.service';

describe('EligibilitycontactforadviceService', () => {
  let service: EligibilitycontactforadviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EligibilitycontactforadviceService],
    }).compile();

    service = module.get<EligibilitycontactforadviceService>(EligibilitycontactforadviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

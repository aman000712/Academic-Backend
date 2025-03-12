import { Test, TestingModule } from '@nestjs/testing';
import { EligibilityherosectionService } from './eligibilityherosection.service';

describe('EligibilityherosectionService', () => {
  let service: EligibilityherosectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EligibilityherosectionService],
    }).compile();

    service = module.get<EligibilityherosectionService>(EligibilityherosectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

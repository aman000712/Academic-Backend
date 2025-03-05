import { Test, TestingModule } from '@nestjs/testing';
import { EligibilityherotextService } from './eligibilityherotext.service';

describe('EligibilityherotextService', () => {
  let service: EligibilityherotextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EligibilityherotextService],
    }).compile();

    service = module.get<EligibilityherotextService>(EligibilityherotextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EligibilityrelevantquestionsService } from './eligibilityrelevantquestions.service';

describe('EligibilityrelevantquestionsService', () => {
  let service: EligibilityrelevantquestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EligibilityrelevantquestionsService],
    }).compile();

    service = module.get<EligibilityrelevantquestionsService>(EligibilityrelevantquestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

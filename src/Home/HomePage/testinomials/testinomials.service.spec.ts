import { Test, TestingModule } from '@nestjs/testing';
import { TestinomialsService } from './testinomials.service';

describe('TestinomialsService', () => {
  let service: TestinomialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestinomialsService],
    }).compile();

    service = module.get<TestinomialsService>(TestinomialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

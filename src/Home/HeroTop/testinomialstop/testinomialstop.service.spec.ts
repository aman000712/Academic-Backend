import { Test, TestingModule } from '@nestjs/testing';
import { TestinomialstopService } from './testinomialstop.service';

describe('TestinomialstopService', () => {
  let service: TestinomialstopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestinomialstopService],
    }).compile();

    service = module.get<TestinomialstopService>(TestinomialstopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

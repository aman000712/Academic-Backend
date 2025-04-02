import { Test, TestingModule } from '@nestjs/testing';
import { HerotestinomialstopService } from './herotestinomialstop.service';

describe('HerotestinomialstopService', () => {
  let service: HerotestinomialstopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HerotestinomialstopService],
    }).compile();

    service = module.get<HerotestinomialstopService>(HerotestinomialstopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HerotestinomialssectionService } from './herotestinomialssection.service';

describe('HerotestinomialssectionService', () => {
  let service: HerotestinomialssectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HerotestinomialssectionService],
    }).compile();

    service = module.get<HerotestinomialssectionService>(HerotestinomialssectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

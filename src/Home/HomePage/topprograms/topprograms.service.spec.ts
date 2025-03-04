import { Test, TestingModule } from '@nestjs/testing';
import { TopprogramsService } from './topprograms.service';

describe('TopprogramsService', () => {
  let service: TopprogramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopprogramsService],
    }).compile();

    service = module.get<TopprogramsService>(TopprogramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

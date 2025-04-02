import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyaskedtopicsService } from './frequentlyaskedtopics.service';

describe('FrequentlyaskedtopicsService', () => {
  let service: FrequentlyaskedtopicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentlyaskedtopicsService],
    }).compile();

    service = module.get<FrequentlyaskedtopicsService>(FrequentlyaskedtopicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyaskedtitleService } from './frequentlyaskedtitle.service';

describe('FrequentlyaskedtitleService', () => {
  let service: FrequentlyaskedtitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentlyaskedtitleService],
    }).compile();

    service = module.get<FrequentlyaskedtitleService>(FrequentlyaskedtitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

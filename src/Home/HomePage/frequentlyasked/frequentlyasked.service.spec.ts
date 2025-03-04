import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyaskedService } from './frequentlyasked.service';

describe('FrequentlyaskedService', () => {
  let service: FrequentlyaskedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentlyaskedService],
    }).compile();

    service = module.get<FrequentlyaskedService>(FrequentlyaskedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

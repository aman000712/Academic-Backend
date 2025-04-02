import { Test, TestingModule } from '@nestjs/testing';
import { TopstudenttestimonialsService } from './topstudenttestimonials.service';

describe('TopstudenttestimonialsService', () => {
  let service: TopstudenttestimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopstudenttestimonialsService],
    }).compile();

    service = module.get<TopstudenttestimonialsService>(TopstudenttestimonialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

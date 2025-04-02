import { Test, TestingModule } from '@nestjs/testing';
import { OurvisionService } from './ourvision.service';

describe('OurvisionService', () => {
  let service: OurvisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurvisionService],
    }).compile();

    service = module.get<OurvisionService>(OurvisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

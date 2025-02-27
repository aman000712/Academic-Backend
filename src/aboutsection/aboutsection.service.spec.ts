import { Test, TestingModule } from '@nestjs/testing';
import { AboutsectionService } from './aboutsection.service';

describe('AboutsectionService', () => {
  let service: AboutsectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutsectionService],
    }).compile();

    service = module.get<AboutsectionService>(AboutsectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

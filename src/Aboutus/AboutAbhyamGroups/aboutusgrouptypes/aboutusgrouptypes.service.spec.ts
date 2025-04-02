import { Test, TestingModule } from '@nestjs/testing';
import { AboutusgrouptypesService } from './aboutusgrouptypes.service';

describe('AboutusgrouptypesService', () => {
  let service: AboutusgrouptypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusgrouptypesService],
    }).compile();

    service = module.get<AboutusgrouptypesService>(AboutusgrouptypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AboutusceosaysService } from './aboutusceosays.service';

describe('AboutusceosaysService', () => {
  let service: AboutusceosaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusceosaysService],
    }).compile();

    service = module.get<AboutusceosaysService>(AboutusceosaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AboutusmorbyService } from './aboutusmorby.service';

describe('AboutusmorbyService', () => {
  let service: AboutusmorbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusmorbyService],
    }).compile();

    service = module.get<AboutusmorbyService>(AboutusmorbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AboutusceoService } from './aboutusceo.service';

describe('AboutusceoService', () => {
  let service: AboutusceoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusceoService],
    }).compile();

    service = module.get<AboutusceoService>(AboutusceoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PopularcoursestopService } from './popularcoursestop.service';

describe('PopularcoursestopService', () => {
  let service: PopularcoursestopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopularcoursestopService],
    }).compile();

    service = module.get<PopularcoursestopService>(PopularcoursestopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

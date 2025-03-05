import { Test, TestingModule } from '@nestjs/testing';
import { WeareproudtopService } from './weareproudtop.service';

describe('WeareproudtopService', () => {
  let service: WeareproudtopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeareproudtopService],
    }).compile();

    service = module.get<WeareproudtopService>(WeareproudtopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

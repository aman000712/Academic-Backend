import { Test, TestingModule } from '@nestjs/testing';
import { DiplomainhotelmtopService } from './diplomainhotelmtop.service';

describe('DiplomainhotelmtopService', () => {
  let service: DiplomainhotelmtopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiplomainhotelmtopService],
    }).compile();

    service = module.get<DiplomainhotelmtopService>(DiplomainhotelmtopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

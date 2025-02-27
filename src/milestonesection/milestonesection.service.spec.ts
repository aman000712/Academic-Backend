import { Test, TestingModule } from '@nestjs/testing';
import { MilestonesectionService } from './milestonesection.service';

describe('MilestonesectionService', () => {
  let service: MilestonesectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilestonesectionService],
    }).compile();

    service = module.get<MilestonesectionService>(MilestonesectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

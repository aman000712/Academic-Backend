import { Test, TestingModule } from '@nestjs/testing';
import { AboutusmilestoneService } from './aboutusmilestone.service';

describe('AboutusmilestoneService', () => {
  let service: AboutusmilestoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusmilestoneService],
    }).compile();

    service = module.get<AboutusmilestoneService>(AboutusmilestoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

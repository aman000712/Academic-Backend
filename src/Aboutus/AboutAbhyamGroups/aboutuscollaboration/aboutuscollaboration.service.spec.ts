import { Test, TestingModule } from '@nestjs/testing';
import { AboutuscollaborationService } from './aboutuscollaboration.service';

describe('AboutuscollaborationService', () => {
  let service: AboutuscollaborationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutuscollaborationService],
    }).compile();

    service = module.get<AboutuscollaborationService>(AboutuscollaborationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

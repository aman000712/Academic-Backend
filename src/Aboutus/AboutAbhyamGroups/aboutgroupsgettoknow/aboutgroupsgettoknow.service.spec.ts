import { Test, TestingModule } from '@nestjs/testing';
import { AboutgroupsgettoknowService } from './aboutgroupsgettoknow.service';

describe('AboutgroupsgettoknowService', () => {
  let service: AboutgroupsgettoknowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutgroupsgettoknowService],
    }).compile();

    service = module.get<AboutgroupsgettoknowService>(AboutgroupsgettoknowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

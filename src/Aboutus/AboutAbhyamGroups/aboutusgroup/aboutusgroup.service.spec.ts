import { Test, TestingModule } from '@nestjs/testing';
import { AboutusgroupService } from './aboutusgroup.service';

describe('AboutusgroupService', () => {
  let service: AboutusgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusgroupService],
    }).compile();

    service = module.get<AboutusgroupService>(AboutusgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

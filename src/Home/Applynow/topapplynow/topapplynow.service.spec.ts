import { Test, TestingModule } from '@nestjs/testing';
import { TopapplynowService } from './topapplynow.service';

describe('TopapplynowService', () => {
  let service: TopapplynowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopapplynowService],
    }).compile();

    service = module.get<TopapplynowService>(TopapplynowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

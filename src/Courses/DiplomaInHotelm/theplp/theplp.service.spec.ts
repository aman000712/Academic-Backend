import { Test, TestingModule } from '@nestjs/testing';
import { TheplpService } from './theplp.service';

describe('TheplpService', () => {
  let service: TheplpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheplpService],
    }).compile();

    service = module.get<TheplpService>(TheplpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

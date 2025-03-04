import { Test, TestingModule } from '@nestjs/testing';
import { TakeactionnowService } from './takeactionnow.service';

describe('TakeactionnowService', () => {
  let service: TakeactionnowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TakeactionnowService],
    }).compile();

    service = module.get<TakeactionnowService>(TakeactionnowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

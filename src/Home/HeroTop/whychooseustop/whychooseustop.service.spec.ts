import { Test, TestingModule } from '@nestjs/testing';
import { WhychooseustopService } from './whychooseustop.service';

describe('WhychooseustopService', () => {
  let service: WhychooseustopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhychooseustopService],
    }).compile();

    service = module.get<WhychooseustopService>(WhychooseustopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { WhychooseusService } from './whychooseus.service';

describe('WhychooseusService', () => {
  let service: WhychooseusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhychooseusService],
    }).compile();

    service = module.get<WhychooseusService>(WhychooseusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NoticestitleService } from './noticestitle.service';

describe('NoticestitleService', () => {
  let service: NoticestitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticestitleService],
    }).compile();

    service = module.get<NoticestitleService>(NoticestitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

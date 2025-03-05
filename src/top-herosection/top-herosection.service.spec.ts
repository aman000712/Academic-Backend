import { Test, TestingModule } from '@nestjs/testing';
import { TopHerosectionService } from './top-herosection.service';

describe('TopHerosectionService', () => {
  let service: TopHerosectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopHerosectionService],
    }).compile();

    service = module.get<TopHerosectionService>(TopHerosectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { StudenttestinomialsService } from './studenttestinomials.service';

describe('StudenttestinomialsService', () => {
  let service: StudenttestinomialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudenttestinomialsService],
    }).compile();

    service = module.get<StudenttestinomialsService>(StudenttestinomialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

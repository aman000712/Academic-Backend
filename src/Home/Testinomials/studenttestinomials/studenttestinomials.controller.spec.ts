import { Test, TestingModule } from '@nestjs/testing';
import { StudenttestinomialsController } from './studenttestinomials.controller';
import { StudenttestinomialsService } from './studenttestinomials.service';

describe('StudenttestinomialsController', () => {
  let controller: StudenttestinomialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudenttestinomialsController],
      providers: [StudenttestinomialsService],
    }).compile();

    controller = module.get<StudenttestinomialsController>(StudenttestinomialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TestinomialsController } from './testinomials.controller';
import { TestinomialsService } from './testinomials.service';

describe('TestinomialsController', () => {
  let controller: TestinomialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestinomialsController],
      providers: [TestinomialsService],
    }).compile();

    controller = module.get<TestinomialsController>(TestinomialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

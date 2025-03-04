import { Test, TestingModule } from '@nestjs/testing';
import { TestinomialstopController } from './testinomialstop.controller';
import { TestinomialstopService } from './testinomialstop.service';

describe('TestinomialstopController', () => {
  let controller: TestinomialstopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestinomialstopController],
      providers: [TestinomialstopService],
    }).compile();

    controller = module.get<TestinomialstopController>(TestinomialstopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

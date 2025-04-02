import { Test, TestingModule } from '@nestjs/testing';
import { HerotestinomialstopController } from './herotestinomialstop.controller';
import { HerotestinomialstopService } from './herotestinomialstop.service';

describe('HerotestinomialstopController', () => {
  let controller: HerotestinomialstopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerotestinomialstopController],
      providers: [HerotestinomialstopService],
    }).compile();

    controller = module.get<HerotestinomialstopController>(HerotestinomialstopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

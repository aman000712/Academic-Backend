import { Test, TestingModule } from '@nestjs/testing';
import { HerotestinomialssectionController } from './herotestinomialssection.controller';
import { HerotestinomialssectionService } from './herotestinomialssection.service';

describe('HerotestinomialssectionController', () => {
  let controller: HerotestinomialssectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerotestinomialssectionController],
      providers: [HerotestinomialssectionService],
    }).compile();

    controller = module.get<HerotestinomialssectionController>(HerotestinomialssectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

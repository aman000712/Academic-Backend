import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyaskedtopicsController } from './frequentlyaskedtopics.controller';
import { FrequentlyaskedtopicsService } from './frequentlyaskedtopics.service';

describe('FrequentlyaskedtopicsController', () => {
  let controller: FrequentlyaskedtopicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequentlyaskedtopicsController],
      providers: [FrequentlyaskedtopicsService],
    }).compile();

    controller = module.get<FrequentlyaskedtopicsController>(FrequentlyaskedtopicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

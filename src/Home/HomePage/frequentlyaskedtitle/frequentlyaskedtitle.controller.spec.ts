import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyaskedtitleController } from './frequentlyaskedtitle.controller';
import { FrequentlyaskedtitleService } from './frequentlyaskedtitle.service';

describe('FrequentlyaskedtitleController', () => {
  let controller: FrequentlyaskedtitleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequentlyaskedtitleController],
      providers: [FrequentlyaskedtitleService],
    }).compile();

    controller = module.get<FrequentlyaskedtitleController>(FrequentlyaskedtitleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

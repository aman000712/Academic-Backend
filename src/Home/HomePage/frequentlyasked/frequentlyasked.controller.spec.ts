import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyaskedController } from './frequentlyasked.controller';
import { FrequentlyaskedService } from './frequentlyasked.service';

describe('FrequentlyaskedController', () => {
  let controller: FrequentlyaskedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequentlyaskedController],
      providers: [FrequentlyaskedService],
    }).compile();

    controller = module.get<FrequentlyaskedController>(FrequentlyaskedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

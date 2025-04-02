import { Test, TestingModule } from '@nestjs/testing';
import { EligibilityherosectionController } from './eligibilityherosection.controller';
import { EligibilityherosectionService } from './eligibilityherosection.service';

describe('EligibilityherosectionController', () => {
  let controller: EligibilityherosectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EligibilityherosectionController],
      providers: [EligibilityherosectionService],
    }).compile();

    controller = module.get<EligibilityherosectionController>(EligibilityherosectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

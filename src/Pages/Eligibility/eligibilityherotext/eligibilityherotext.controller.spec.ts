import { Test, TestingModule } from '@nestjs/testing';
import { EligibilityherotextController } from './eligibilityherotext.controller';
import { EligibilityherotextService } from './eligibilityherotext.service';

describe('EligibilityherotextController', () => {
  let controller: EligibilityherotextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EligibilityherotextController],
      providers: [EligibilityherotextService],
    }).compile();

    controller = module.get<EligibilityherotextController>(EligibilityherotextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

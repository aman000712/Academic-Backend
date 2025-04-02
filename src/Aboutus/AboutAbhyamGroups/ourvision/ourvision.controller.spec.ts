import { Test, TestingModule } from '@nestjs/testing';
import { OurvisionController } from './ourvision.controller';
import { OurvisionService } from './ourvision.service';

describe('OurvisionController', () => {
  let controller: OurvisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurvisionController],
      providers: [OurvisionService],
    }).compile();

    controller = module.get<OurvisionController>(OurvisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

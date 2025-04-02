import { Test, TestingModule } from '@nestjs/testing';
import { EligibilityrelevantquestionsController } from './eligibilityrelevantquestions.controller';
import { EligibilityrelevantquestionsService } from './eligibilityrelevantquestions.service';

describe('EligibilityrelevantquestionsController', () => {
  let controller: EligibilityrelevantquestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EligibilityrelevantquestionsController],
      providers: [EligibilityrelevantquestionsService],
    }).compile();

    controller = module.get<EligibilityrelevantquestionsController>(EligibilityrelevantquestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

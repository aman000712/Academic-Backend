import { Test, TestingModule } from '@nestjs/testing';
import { EligibilitycontactforadviceController } from './eligibilitycontactforadvice.controller';
import { EligibilitycontactforadviceService } from './eligibilitycontactforadvice.service';

describe('EligibilitycontactforadviceController', () => {
  let controller: EligibilitycontactforadviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EligibilitycontactforadviceController],
      providers: [EligibilitycontactforadviceService],
    }).compile();

    controller = module.get<EligibilitycontactforadviceController>(EligibilitycontactforadviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

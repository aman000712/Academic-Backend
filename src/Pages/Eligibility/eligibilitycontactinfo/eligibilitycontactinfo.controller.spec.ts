import { Test, TestingModule } from '@nestjs/testing';
import { EligibilitycontactinfoController } from './eligibilitycontactinfo.controller';
import { EligibilitycontactinfoService } from './eligibilitycontactinfo.service';

describe('EligibilitycontactinfoController', () => {
  let controller: EligibilitycontactinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EligibilitycontactinfoController],
      providers: [EligibilitycontactinfoService],
    }).compile();

    controller = module.get<EligibilitycontactinfoController>(EligibilitycontactinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

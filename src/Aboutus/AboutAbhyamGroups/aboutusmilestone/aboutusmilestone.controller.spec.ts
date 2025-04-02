import { Test, TestingModule } from '@nestjs/testing';
import { AboutusmilestoneController } from './aboutusmilestone.controller';
import { AboutusmilestoneService } from './aboutusmilestone.service';

describe('AboutusmilestoneController', () => {
  let controller: AboutusmilestoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusmilestoneController],
      providers: [AboutusmilestoneService],
    }).compile();

    controller = module.get<AboutusmilestoneController>(AboutusmilestoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

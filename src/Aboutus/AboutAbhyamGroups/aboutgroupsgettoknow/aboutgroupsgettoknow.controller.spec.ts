import { Test, TestingModule } from '@nestjs/testing';
import { AboutgroupsgettoknowController } from './aboutgroupsgettoknow.controller';
import { AboutgroupsgettoknowService } from './aboutgroupsgettoknow.service';

describe('AboutgroupsgettoknowController', () => {
  let controller: AboutgroupsgettoknowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutgroupsgettoknowController],
      providers: [AboutgroupsgettoknowService],
    }).compile();

    controller = module.get<AboutgroupsgettoknowController>(AboutgroupsgettoknowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AboutuscollaborationController } from './aboutuscollaboration.controller';
import { AboutuscollaborationService } from './aboutuscollaboration.service';

describe('AboutuscollaborationController', () => {
  let controller: AboutuscollaborationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutuscollaborationController],
      providers: [AboutuscollaborationService],
    }).compile();

    controller = module.get<AboutuscollaborationController>(AboutuscollaborationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

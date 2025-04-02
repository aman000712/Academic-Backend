import { Test, TestingModule } from '@nestjs/testing';
import { AboutusceosaysController } from './aboutusceosays.controller';
import { AboutusceosaysService } from './aboutusceosays.service';

describe('AboutusceosaysController', () => {
  let controller: AboutusceosaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusceosaysController],
      providers: [AboutusceosaysService],
    }).compile();

    controller = module.get<AboutusceosaysController>(AboutusceosaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

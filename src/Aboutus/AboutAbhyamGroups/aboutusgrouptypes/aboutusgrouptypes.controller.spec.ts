import { Test, TestingModule } from '@nestjs/testing';
import { AboutusgrouptypesController } from './aboutusgrouptypes.controller';
import { AboutusgrouptypesService } from './aboutusgrouptypes.service';

describe('AboutusgrouptypesController', () => {
  let controller: AboutusgrouptypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusgrouptypesController],
      providers: [AboutusgrouptypesService],
    }).compile();

    controller = module.get<AboutusgrouptypesController>(AboutusgrouptypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

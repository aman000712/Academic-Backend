import { Test, TestingModule } from '@nestjs/testing';
import { AboutsectionController } from './aboutsection.controller';
import { AboutsectionService } from './aboutsection.service';

describe('AboutsectionController', () => {
  let controller: AboutsectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutsectionController],
      providers: [AboutsectionService],
    }).compile();

    controller = module.get<AboutsectionController>(AboutsectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

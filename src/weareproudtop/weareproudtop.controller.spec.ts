import { Test, TestingModule } from '@nestjs/testing';
import { WeareproudtopController } from './weareproudtop.controller';
import { WeareproudtopService } from './weareproudtop.service';

describe('WeareproudtopController', () => {
  let controller: WeareproudtopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeareproudtopController],
      providers: [WeareproudtopService],
    }).compile();

    controller = module.get<WeareproudtopController>(WeareproudtopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

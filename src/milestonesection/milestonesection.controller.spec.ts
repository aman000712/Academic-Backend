import { Test, TestingModule } from '@nestjs/testing';
import { MilestonesectionController } from './milestonesection.controller';
import { MilestonesectionService } from './milestonesection.service';

describe('MilestonesectionController', () => {
  let controller: MilestonesectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilestonesectionController],
      providers: [MilestonesectionService],
    }).compile();

    controller = module.get<MilestonesectionController>(MilestonesectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

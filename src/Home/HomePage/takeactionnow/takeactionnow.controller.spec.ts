import { Test, TestingModule } from '@nestjs/testing';
import { TakeactionnowController } from './takeactionnow.controller';
import { TakeactionnowService } from './takeactionnow.service';

describe('TakeactionnowController', () => {
  let controller: TakeactionnowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakeactionnowController],
      providers: [TakeactionnowService],
    }).compile();

    controller = module.get<TakeactionnowController>(TakeactionnowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

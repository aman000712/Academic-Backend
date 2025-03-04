import { Test, TestingModule } from '@nestjs/testing';
import { TopprogramsController } from './topprograms.controller';
import { TopprogramsService } from './topprograms.service';

describe('TopprogramsController', () => {
  let controller: TopprogramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopprogramsController],
      providers: [TopprogramsService],
    }).compile();

    controller = module.get<TopprogramsController>(TopprogramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

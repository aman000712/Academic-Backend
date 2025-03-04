import { Test, TestingModule } from '@nestjs/testing';
import { TopapplynowController } from './topapplynow.controller';
import { TopapplynowService } from './topapplynow.service';

describe('TopapplynowController', () => {
  let controller: TopapplynowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopapplynowController],
      providers: [TopapplynowService],
    }).compile();

    controller = module.get<TopapplynowController>(TopapplynowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

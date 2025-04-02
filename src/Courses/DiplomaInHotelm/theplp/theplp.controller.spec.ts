import { Test, TestingModule } from '@nestjs/testing';
import { TheplpController } from './theplp.controller';
import { TheplpService } from './theplp.service';

describe('TheplpController', () => {
  let controller: TheplpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheplpController],
      providers: [TheplpService],
    }).compile();

    controller = module.get<TheplpController>(TheplpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

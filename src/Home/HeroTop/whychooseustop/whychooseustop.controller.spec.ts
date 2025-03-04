import { Test, TestingModule } from '@nestjs/testing';
import { WhychooseustopController } from './whychooseustop.controller';
import { WhychooseustopService } from './whychooseustop.service';

describe('WhychooseustopController', () => {
  let controller: WhychooseustopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhychooseustopController],
      providers: [WhychooseustopService],
    }).compile();

    controller = module.get<WhychooseustopController>(WhychooseustopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

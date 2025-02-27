import { Test, TestingModule } from '@nestjs/testing';
import { WhychooseusController } from './whychooseus.controller';
import { WhychooseusService } from './whychooseus.service';

describe('WhychooseusController', () => {
  let controller: WhychooseusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhychooseusController],
      providers: [WhychooseusService],
    }).compile();

    controller = module.get<WhychooseusController>(WhychooseusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

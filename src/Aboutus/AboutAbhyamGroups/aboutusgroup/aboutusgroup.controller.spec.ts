import { Test, TestingModule } from '@nestjs/testing';
import { AboutusgroupController } from './aboutusgroup.controller';
import { AboutusgroupService } from './aboutusgroup.service';

describe('AboutusgroupController', () => {
  let controller: AboutusgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusgroupController],
      providers: [AboutusgroupService],
    }).compile();

    controller = module.get<AboutusgroupController>(AboutusgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

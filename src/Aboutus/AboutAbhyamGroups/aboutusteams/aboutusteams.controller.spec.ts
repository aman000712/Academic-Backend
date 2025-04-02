import { Test, TestingModule } from '@nestjs/testing';
import { AboutusteamsController } from './aboutusteams.controller';
import { AboutusteamsService } from './aboutusteams.service';

describe('AboutusteamsController', () => {
  let controller: AboutusteamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusteamsController],
      providers: [AboutusteamsService],
    }).compile();

    controller = module.get<AboutusteamsController>(AboutusteamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

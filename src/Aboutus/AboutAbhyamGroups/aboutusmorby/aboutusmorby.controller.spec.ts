import { Test, TestingModule } from '@nestjs/testing';
import { AboutusmorbyController } from './aboutusmorby.controller';
import { AboutusmorbyService } from './aboutusmorby.service';

describe('AboutusmorbyController', () => {
  let controller: AboutusmorbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusmorbyController],
      providers: [AboutusmorbyService],
    }).compile();

    controller = module.get<AboutusmorbyController>(AboutusmorbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

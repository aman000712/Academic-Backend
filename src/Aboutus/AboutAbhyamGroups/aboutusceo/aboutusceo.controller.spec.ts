import { Test, TestingModule } from '@nestjs/testing';
import { AboutusceoController } from './aboutusceo.controller';
import { AboutusceoService } from './aboutusceo.service';

describe('AboutusceoController', () => {
  let controller: AboutusceoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutusceoController],
      providers: [AboutusceoService],
    }).compile();

    controller = module.get<AboutusceoController>(AboutusceoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

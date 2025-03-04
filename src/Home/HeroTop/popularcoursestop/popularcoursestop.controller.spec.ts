import { Test, TestingModule } from '@nestjs/testing';
import { PopularcoursestopController } from './popularcoursestop.controller';
import { PopularcoursestopService } from './popularcoursestop.service';

describe('PopularcoursestopController', () => {
  let controller: PopularcoursestopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopularcoursestopController],
      providers: [PopularcoursestopService],
    }).compile();

    controller = module.get<PopularcoursestopController>(PopularcoursestopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

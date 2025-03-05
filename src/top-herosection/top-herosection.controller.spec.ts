import { Test, TestingModule } from '@nestjs/testing';
import { TopHerosectionController } from './top-herosection.controller';
import { TopHerosectionService } from './top-herosection.service';

describe('TopHerosectionController', () => {
  let controller: TopHerosectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopHerosectionController],
      providers: [TopHerosectionService],
    }).compile();

    controller = module.get<TopHerosectionController>(TopHerosectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

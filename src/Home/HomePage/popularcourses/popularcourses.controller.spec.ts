import { Test, TestingModule } from '@nestjs/testing';
import { PopularcoursesController } from './popularcourses.controller';
import { PopularcoursesService } from './popularcourses.service';

describe('PopularcoursesController', () => {
  let controller: PopularcoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopularcoursesController],
      providers: [PopularcoursesService],
    }).compile();

    controller = module.get<PopularcoursesController>(PopularcoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

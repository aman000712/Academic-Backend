import { Test, TestingModule } from '@nestjs/testing';
import { BlogcategoriesController } from './blogcategories.controller';
import { BlogcategoriesService } from './blogcategories.service';

describe('BlogcategoriesController', () => {
  let controller: BlogcategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogcategoriesController],
      providers: [BlogcategoriesService],
    }).compile();

    controller = module.get<BlogcategoriesController>(BlogcategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BlogcategoriesService } from './blogcategories.service';

describe('BlogcategoriesService', () => {
  let service: BlogcategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogcategoriesService],
    }).compile();

    service = module.get<BlogcategoriesService>(BlogcategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

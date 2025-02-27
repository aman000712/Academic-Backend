import { Test, TestingModule } from '@nestjs/testing';
import { PopularcoursesService } from './popularcourses.service';

describe('PopularcoursesService', () => {
  let service: PopularcoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopularcoursesService],
    }).compile();

    service = module.get<PopularcoursesService>(PopularcoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

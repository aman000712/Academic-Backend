import { Test, TestingModule } from '@nestjs/testing';
import { CourseoverviewService } from './courseoverview.service';

describe('CourseoverviewService', () => {
  let service: CourseoverviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseoverviewService],
    }).compile();

    service = module.get<CourseoverviewService>(CourseoverviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

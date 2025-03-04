import { Test, TestingModule } from '@nestjs/testing';
import { CourseoverviewController } from './courseoverview.controller';
import { CourseoverviewService } from './courseoverview.service';

describe('CourseoverviewController', () => {
  let controller: CourseoverviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseoverviewController],
      providers: [CourseoverviewService],
    }).compile();

    controller = module.get<CourseoverviewController>(CourseoverviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

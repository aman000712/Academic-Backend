import { Test, TestingModule } from '@nestjs/testing';
import { WhythiscourseService } from './whythiscourse.service';

describe('WhythiscourseService', () => {
  let service: WhythiscourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhythiscourseService],
    }).compile();

    service = module.get<WhythiscourseService>(WhythiscourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

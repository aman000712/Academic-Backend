import { Test, TestingModule } from '@nestjs/testing';
import { WhythiscourseController } from './whythiscourse.controller';
import { WhythiscourseService } from './whythiscourse.service';

describe('WhythiscourseController', () => {
  let controller: WhythiscourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhythiscourseController],
      providers: [WhythiscourseService],
    }).compile();

    controller = module.get<WhythiscourseController>(WhythiscourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

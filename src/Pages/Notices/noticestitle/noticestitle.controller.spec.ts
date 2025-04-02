import { Test, TestingModule } from '@nestjs/testing';
import { NoticestitleController } from './noticestitle.controller';
import { NoticestitleService } from './noticestitle.service';

describe('NoticestitleController', () => {
  let controller: NoticestitleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticestitleController],
      providers: [NoticestitleService],
    }).compile();

    controller = module.get<NoticestitleController>(NoticestitleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

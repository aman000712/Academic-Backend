import { Test, TestingModule } from '@nestjs/testing';
import { BlogsandupdatesController } from './blogsandupdates.controller';
import { BlogsandupdatesService } from './blogsandupdates.service';

describe('BlogsandupdatesController', () => {
  let controller: BlogsandupdatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogsandupdatesController],
      providers: [BlogsandupdatesService],
    }).compile();

    controller = module.get<BlogsandupdatesController>(BlogsandupdatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

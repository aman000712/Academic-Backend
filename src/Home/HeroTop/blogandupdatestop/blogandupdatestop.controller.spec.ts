import { Test, TestingModule } from '@nestjs/testing';
import { BlogandupdatestopController } from './blogandupdatestop.controller';
import { BlogandupdatestopService } from './blogandupdatestop.service';

describe('BlogandupdatestopController', () => {
  let controller: BlogandupdatestopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogandupdatestopController],
      providers: [BlogandupdatestopService],
    }).compile();

    controller = module.get<BlogandupdatestopController>(BlogandupdatestopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

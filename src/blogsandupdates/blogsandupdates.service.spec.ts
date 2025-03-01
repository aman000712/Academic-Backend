import { Test, TestingModule } from '@nestjs/testing';
import { BlogsandupdatesService } from './blogsandupdates.service';

describe('BlogsandupdatesService', () => {
  let service: BlogsandupdatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogsandupdatesService],
    }).compile();

    service = module.get<BlogsandupdatesService>(BlogsandupdatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

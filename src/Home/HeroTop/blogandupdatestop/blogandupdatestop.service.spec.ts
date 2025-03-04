import { Test, TestingModule } from '@nestjs/testing';
import { BlogandupdatestopService } from './blogandupdatestop.service';

describe('BlogandupdatestopService', () => {
  let service: BlogandupdatestopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogandupdatestopService],
    }).compile();

    service = module.get<BlogandupdatestopService>(BlogandupdatestopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

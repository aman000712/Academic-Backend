import { Test, TestingModule } from '@nestjs/testing';
import { GettoknowimagesService } from './gettoknowimages.service';

describe('GettoknowimagesService', () => {
  let service: GettoknowimagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GettoknowimagesService],
    }).compile();

    service = module.get<GettoknowimagesService>(GettoknowimagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

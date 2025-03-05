import { Test, TestingModule } from '@nestjs/testing';
import { InquirysectionService } from './inquirysection.service';

describe('InquirysectionService', () => {
  let service: InquirysectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InquirysectionService],
    }).compile();

    service = module.get<InquirysectionService>(InquirysectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

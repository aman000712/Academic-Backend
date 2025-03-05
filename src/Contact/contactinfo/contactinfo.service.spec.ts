import { Test, TestingModule } from '@nestjs/testing';
import { ContactinfoService } from './contactinfo.service';

describe('ContactinfoService', () => {
  let service: ContactinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactinfoService],
    }).compile();

    service = module.get<ContactinfoService>(ContactinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

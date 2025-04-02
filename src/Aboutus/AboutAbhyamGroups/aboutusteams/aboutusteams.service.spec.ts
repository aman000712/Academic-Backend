import { Test, TestingModule } from '@nestjs/testing';
import { AboutusteamsService } from './aboutusteams.service';

describe('AboutusteamsService', () => {
  let service: AboutusteamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutusteamsService],
    }).compile();

    service = module.get<AboutusteamsService>(AboutusteamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

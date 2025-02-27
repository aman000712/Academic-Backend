import { Test, TestingModule } from '@nestjs/testing';
import { OurpartnersService } from './ourpartners.service';

describe('OurpartnersService', () => {
  let service: OurpartnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurpartnersService],
    }).compile();

    service = module.get<OurpartnersService>(OurpartnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

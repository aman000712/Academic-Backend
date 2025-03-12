import { Test, TestingModule } from '@nestjs/testing';
import { OurpartnerslogosService } from './ourpartnerslogos.service';

describe('OurpartnerslogosService', () => {
  let service: OurpartnerslogosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurpartnerslogosService],
    }).compile();

    service = module.get<OurpartnerslogosService>(OurpartnerslogosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

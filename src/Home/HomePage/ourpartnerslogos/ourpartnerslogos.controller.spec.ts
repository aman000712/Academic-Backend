import { Test, TestingModule } from '@nestjs/testing';
import { OurpartnerslogosController } from './ourpartnerslogos.controller';
import { OurpartnerslogosService } from './ourpartnerslogos.service';

describe('OurpartnerslogosController', () => {
  let controller: OurpartnerslogosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurpartnerslogosController],
      providers: [OurpartnerslogosService],
    }).compile();

    controller = module.get<OurpartnerslogosController>(OurpartnerslogosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

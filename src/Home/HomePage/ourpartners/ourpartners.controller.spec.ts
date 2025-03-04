import { Test, TestingModule } from '@nestjs/testing';
import { OurpartnersController } from './ourpartners.controller';
import { OurpartnersService } from './ourpartners.service';

describe('OurpartnersController', () => {
  let controller: OurpartnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurpartnersController],
      providers: [OurpartnersService],
    }).compile();

    controller = module.get<OurpartnersController>(OurpartnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

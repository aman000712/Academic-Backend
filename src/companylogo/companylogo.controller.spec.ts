import { Test, TestingModule } from '@nestjs/testing';
import { CompanylogoController } from './companylogo.controller';
import { CompanylogoService } from './companylogo.service';

describe('CompanylogoController', () => {
  let controller: CompanylogoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanylogoController],
      providers: [CompanylogoService],
    }).compile();

    controller = module.get<CompanylogoController>(CompanylogoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

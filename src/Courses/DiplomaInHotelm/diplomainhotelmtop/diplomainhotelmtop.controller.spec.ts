import { Test, TestingModule } from '@nestjs/testing';
import { DiplomainhotelmtopController } from './diplomainhotelmtop.controller';
import { DiplomainhotelmtopService } from './diplomainhotelmtop.service';

describe('DiplomainhotelmtopController', () => {
  let controller: DiplomainhotelmtopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiplomainhotelmtopController],
      providers: [DiplomainhotelmtopService],
    }).compile();

    controller = module.get<DiplomainhotelmtopController>(DiplomainhotelmtopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

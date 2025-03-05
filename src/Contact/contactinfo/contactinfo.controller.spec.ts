import { Test, TestingModule } from '@nestjs/testing';
import { ContactinfoController } from './contactinfo.controller';
import { ContactinfoService } from './contactinfo.service';

describe('ContactinfoController', () => {
  let controller: ContactinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactinfoController],
      providers: [ContactinfoService],
    }).compile();

    controller = module.get<ContactinfoController>(ContactinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

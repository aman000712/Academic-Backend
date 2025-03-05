import { Test, TestingModule } from '@nestjs/testing';
import { InquirysectionController } from './inquirysection.controller';
import { InquirysectionService } from './inquirysection.service';

describe('InquirysectionController', () => {
  let controller: InquirysectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InquirysectionController],
      providers: [InquirysectionService],
    }).compile();

    controller = module.get<InquirysectionController>(InquirysectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

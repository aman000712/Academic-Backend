import { Test, TestingModule } from '@nestjs/testing';
import { GettoknowimagesController } from './gettoknowimages.controller';
import { GettoknowimagesService } from './gettoknowimages.service';

describe('GettoknowimagesController', () => {
  let controller: GettoknowimagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GettoknowimagesController],
      providers: [GettoknowimagesService],
    }).compile();

    controller = module.get<GettoknowimagesController>(GettoknowimagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

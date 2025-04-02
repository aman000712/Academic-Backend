import { Test, TestingModule } from '@nestjs/testing';
import { TopstudenttestimonialsController } from './topstudenttestimonials.controller';
import { TopstudenttestimonialsService } from './topstudenttestimonials.service';

describe('TopstudenttestimonialsController', () => {
  let controller: TopstudenttestimonialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopstudenttestimonialsController],
      providers: [TopstudenttestimonialsService],
    }).compile();

    controller = module.get<TopstudenttestimonialsController>(TopstudenttestimonialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

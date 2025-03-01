import { Test, TestingModule } from '@nestjs/testing';
import { EventsandupdatesController } from './eventsandupdates.controller';
import { EventsandupdatesService } from './eventsandupdates.service';

describe('EventsandupdatesController', () => {
  let controller: EventsandupdatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsandupdatesController],
      providers: [EventsandupdatesService],
    }).compile();

    controller = module.get<EventsandupdatesController>(EventsandupdatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

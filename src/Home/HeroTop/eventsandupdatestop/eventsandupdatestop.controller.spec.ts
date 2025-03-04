import { Test, TestingModule } from '@nestjs/testing';
import { EventsandupdatestopController } from './eventsandupdatestop.controller';
import { EventsandupdatestopService } from './eventsandupdatestop.service';

describe('EventsandupdatestopController', () => {
  let controller: EventsandupdatestopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsandupdatestopController],
      providers: [EventsandupdatestopService],
    }).compile();

    controller = module.get<EventsandupdatestopController>(EventsandupdatestopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

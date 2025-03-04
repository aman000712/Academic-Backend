import { Test, TestingModule } from '@nestjs/testing';
import { EventsandupdatestopService } from './eventsandupdatestop.service';

describe('EventsandupdatestopService', () => {
  let service: EventsandupdatestopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsandupdatestopService],
    }).compile();

    service = module.get<EventsandupdatestopService>(EventsandupdatestopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

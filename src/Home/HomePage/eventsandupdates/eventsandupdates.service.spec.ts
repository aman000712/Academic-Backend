import { Test, TestingModule } from '@nestjs/testing';
import { EventsandupdatesService } from './eventsandupdates.service';

describe('EventsandupdatesService', () => {
  let service: EventsandupdatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsandupdatesService],
    }).compile();

    service = module.get<EventsandupdatesService>(EventsandupdatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

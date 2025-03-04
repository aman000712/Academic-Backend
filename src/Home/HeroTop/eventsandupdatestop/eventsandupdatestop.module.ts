import { Module } from '@nestjs/common';
import { EventsandupdatestopService } from './eventsandupdatestop.service';
import { EventsandupdatestopController } from './eventsandupdatestop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eventsandupdatestop } from './entities/eventsandupdatestop.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Eventsandupdatestop
    ]),
  ],


  controllers: [EventsandupdatestopController],
  providers: [EventsandupdatestopService],
})
export class EventsandupdatestopModule {}

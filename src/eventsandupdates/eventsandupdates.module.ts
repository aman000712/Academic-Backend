import { Module } from '@nestjs/common';
import { EventsandupdatesService } from './eventsandupdates.service';
import { EventsandupdatesController } from './eventsandupdates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eventsandupdate } from './entities/eventsandupdate.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Eventsandupdate,
      Fileupload
    ])
  ],




  controllers: [EventsandupdatesController],
  providers: [EventsandupdatesService],
})
export class EventsandupdatesModule {}

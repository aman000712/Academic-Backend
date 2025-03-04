import { PartialType } from '@nestjs/swagger';
import { CreateEventsandupdatestopDto } from './create-eventsandupdatestop.dto';

export class UpdateEventsandupdatestopDto extends PartialType(CreateEventsandupdatestopDto) {}

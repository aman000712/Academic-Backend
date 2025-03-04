import { PartialType } from '@nestjs/swagger';
import { CreateEventsandupdateDto } from './create-eventsandupdate.dto';

export class UpdateEventsandupdateDto extends PartialType(CreateEventsandupdateDto) {}

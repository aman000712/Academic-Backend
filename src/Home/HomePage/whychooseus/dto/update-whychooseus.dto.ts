import { PartialType } from '@nestjs/swagger';
import { CreateWhychooseusDto } from './create-whychooseus.dto';

export class UpdateWhychooseusDto extends PartialType(CreateWhychooseusDto) {}

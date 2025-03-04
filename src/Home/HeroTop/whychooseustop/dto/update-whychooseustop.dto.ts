import { PartialType } from '@nestjs/swagger';
import { CreateWhychooseustopDto } from './create-whychooseustop.dto';

export class UpdateWhychooseustopDto extends PartialType(CreateWhychooseustopDto) {}

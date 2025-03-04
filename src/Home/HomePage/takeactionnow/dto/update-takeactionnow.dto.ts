import { PartialType } from '@nestjs/swagger';
import { CreateTakeactionnowDto } from './create-takeactionnow.dto';

export class UpdateTakeactionnowDto extends PartialType(CreateTakeactionnowDto) {}

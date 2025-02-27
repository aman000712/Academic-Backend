import { PartialType } from '@nestjs/swagger';
import { CreateMilestonesectionDto } from './create-milestonesection.dto';

export class UpdateMilestonesectionDto extends PartialType(CreateMilestonesectionDto) {}

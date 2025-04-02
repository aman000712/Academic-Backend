import { PartialType } from '@nestjs/swagger';
import { CreateAboutusmilestoneDto } from './create-aboutusmilestone.dto';

export class UpdateAboutusmilestoneDto extends PartialType(CreateAboutusmilestoneDto) {}

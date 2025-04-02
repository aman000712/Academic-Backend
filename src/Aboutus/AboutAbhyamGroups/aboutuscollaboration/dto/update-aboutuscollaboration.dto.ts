import { PartialType } from '@nestjs/swagger';
import { CreateAboutuscollaborationDto } from './create-aboutuscollaboration.dto';

export class UpdateAboutuscollaborationDto extends PartialType(CreateAboutuscollaborationDto) {}

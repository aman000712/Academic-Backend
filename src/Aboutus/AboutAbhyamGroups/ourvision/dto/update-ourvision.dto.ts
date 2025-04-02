import { PartialType } from '@nestjs/swagger';
import { CreateOurvisionDto } from './create-ourvision.dto';

export class UpdateOurvisionDto extends PartialType(CreateOurvisionDto) {}

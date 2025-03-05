import { PartialType } from '@nestjs/swagger';
import { CreateEligibilityherotextDto } from './create-eligibilityherotext.dto';

export class UpdateEligibilityherotextDto extends PartialType(CreateEligibilityherotextDto) {}

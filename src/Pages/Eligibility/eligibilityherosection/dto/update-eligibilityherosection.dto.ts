import { PartialType } from '@nestjs/swagger';
import { CreateEligibilityherosectionDto } from './create-eligibilityherosection.dto';

export class UpdateEligibilityherosectionDto extends PartialType(CreateEligibilityherosectionDto) {}

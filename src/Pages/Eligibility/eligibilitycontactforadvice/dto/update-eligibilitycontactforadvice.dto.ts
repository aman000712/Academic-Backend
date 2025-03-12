import { PartialType } from '@nestjs/swagger';
import { CreateEligibilitycontactforadviceDto } from './create-eligibilitycontactforadvice.dto';

export class UpdateEligibilitycontactforadviceDto extends PartialType(CreateEligibilitycontactforadviceDto) {}

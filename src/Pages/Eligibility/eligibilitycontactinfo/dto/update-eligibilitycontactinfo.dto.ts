import { PartialType } from '@nestjs/swagger';
import { CreateEligibilitycontactinfoDto } from './create-eligibilitycontactinfo.dto';

export class UpdateEligibilitycontactinfoDto extends PartialType(CreateEligibilitycontactinfoDto) {}

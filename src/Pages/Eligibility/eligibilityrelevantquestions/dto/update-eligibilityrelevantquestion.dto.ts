import { PartialType } from '@nestjs/swagger';
import { CreateEligibilityrelevantquestionDto } from './create-eligibilityrelevantquestion.dto';

export class UpdateEligibilityrelevantquestionDto extends PartialType(CreateEligibilityrelevantquestionDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateTestinomialDto } from './create-testinomial.dto';

export class UpdateTestinomialDto extends PartialType(CreateTestinomialDto) {}

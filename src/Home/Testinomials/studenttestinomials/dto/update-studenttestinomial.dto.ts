import { PartialType } from '@nestjs/swagger';
import { CreateStudenttestinomialDto } from './create-studenttestinomial.dto';

export class UpdateStudenttestinomialDto extends PartialType(CreateStudenttestinomialDto) {}

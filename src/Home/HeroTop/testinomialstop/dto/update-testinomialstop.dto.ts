import { PartialType } from '@nestjs/swagger';
import { CreateTestinomialstopDto } from './create-testinomialstop.dto';

export class UpdateTestinomialstopDto extends PartialType(CreateTestinomialstopDto) {}

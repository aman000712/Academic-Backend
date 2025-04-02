import { PartialType } from '@nestjs/swagger';
import { CreateHerotestinomialstopDto } from './create-herotestinomialstop.dto';

export class UpdateHerotestinomialstopDto extends PartialType(CreateHerotestinomialstopDto) {}

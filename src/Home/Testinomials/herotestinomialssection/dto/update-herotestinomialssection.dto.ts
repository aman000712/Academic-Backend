import { PartialType } from '@nestjs/swagger';
import { CreateHerotestinomialssectionDto } from './create-herotestinomialssection.dto';

export class UpdateHerotestinomialssectionDto extends PartialType(CreateHerotestinomialssectionDto) {}

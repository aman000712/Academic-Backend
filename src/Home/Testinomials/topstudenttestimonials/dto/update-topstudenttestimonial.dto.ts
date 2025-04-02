import { PartialType } from '@nestjs/swagger';
import { CreateTopstudenttestimonialDto } from './create-topstudenttestimonial.dto';

export class UpdateTopstudenttestimonialDto extends PartialType(CreateTopstudenttestimonialDto) {}

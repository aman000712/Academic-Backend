import { PartialType } from '@nestjs/swagger';
import { CreateFrequentlyaskedDto } from './create-frequentlyasked.dto';

export class UpdateFrequentlyaskedDto extends PartialType(CreateFrequentlyaskedDto) {}

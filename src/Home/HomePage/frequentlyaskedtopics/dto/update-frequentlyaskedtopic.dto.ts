import { PartialType } from '@nestjs/swagger';
import { CreateFrequentlyaskedtopicDto } from './create-frequentlyaskedtopic.dto';

export class UpdateFrequentlyaskedtopicDto extends PartialType(CreateFrequentlyaskedtopicDto) {}

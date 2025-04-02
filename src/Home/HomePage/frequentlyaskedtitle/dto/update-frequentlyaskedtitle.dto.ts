import { PartialType } from '@nestjs/swagger';
import { CreateFrequentlyaskedtitleDto } from './create-frequentlyaskedtitle.dto';

export class UpdateFrequentlyaskedtitleDto extends PartialType(CreateFrequentlyaskedtitleDto) {}

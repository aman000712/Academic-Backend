import { PartialType } from '@nestjs/swagger';
import { CreateNoticestitleDto } from './create-noticestitle.dto';

export class UpdateNoticestitleDto extends PartialType(CreateNoticestitleDto) {}

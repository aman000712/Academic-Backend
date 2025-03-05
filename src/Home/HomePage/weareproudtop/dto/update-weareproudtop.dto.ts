import { PartialType } from '@nestjs/swagger';
import { CreateWeareproudtopDto } from './create-weareproudtop.dto';

export class UpdateWeareproudtopDto extends PartialType(CreateWeareproudtopDto) {}

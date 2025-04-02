import { PartialType } from '@nestjs/swagger';
import { CreateTheplpDto } from './create-theplp.dto';

export class UpdateTheplpDto extends PartialType(CreateTheplpDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateInquirysectionDto } from './create-inquirysection.dto';

export class UpdateInquirysectionDto extends PartialType(CreateInquirysectionDto) {}

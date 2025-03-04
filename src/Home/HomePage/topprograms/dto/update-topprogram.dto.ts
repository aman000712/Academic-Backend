import { PartialType } from '@nestjs/swagger';
import { CreateTopprogramDto } from './create-topprogram.dto';

export class UpdateTopprogramDto extends PartialType(CreateTopprogramDto) {}

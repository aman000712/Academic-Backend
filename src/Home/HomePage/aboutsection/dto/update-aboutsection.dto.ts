import { PartialType } from '@nestjs/swagger';
import { CreateAboutsectionDto } from './create-aboutsection.dto';

export class UpdateAboutsectionDto extends PartialType(CreateAboutsectionDto) {}

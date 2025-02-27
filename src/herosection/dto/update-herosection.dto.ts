import { PartialType } from '@nestjs/mapped-types';
import { CreateHerosectionDto } from './create-herosection.dto';

export class UpdateHerosectionDto extends PartialType(CreateHerosectionDto) {}

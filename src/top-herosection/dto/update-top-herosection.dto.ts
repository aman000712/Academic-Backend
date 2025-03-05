import { PartialType } from '@nestjs/swagger';
import { CreateTopHerosectionDto } from './create-top-herosection.dto';

export class UpdateTopHerosectionDto extends PartialType(CreateTopHerosectionDto) {}

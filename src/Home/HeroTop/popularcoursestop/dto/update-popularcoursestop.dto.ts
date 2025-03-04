import { PartialType } from '@nestjs/swagger';
import { CreatePopularcoursestopDto } from './create-popularcoursestop.dto';

export class UpdatePopularcoursestopDto extends PartialType(CreatePopularcoursestopDto) {}

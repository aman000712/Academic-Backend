import { PartialType } from '@nestjs/swagger';
import { CreateWhythiscourseDto } from './create-whythiscourse.dto';

export class UpdateWhythiscourseDto extends PartialType(CreateWhythiscourseDto) {}

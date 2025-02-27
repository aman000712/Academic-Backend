import { PartialType } from '@nestjs/swagger';
import { CreatePopularcourseDto } from './create-popularcourse.dto';

export class UpdatePopularcourseDto extends PartialType(CreatePopularcourseDto) {}

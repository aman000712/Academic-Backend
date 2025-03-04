import { PartialType } from '@nestjs/swagger';
import { CreateCourseoverviewDto } from './create-courseoverview.dto';

export class UpdateCourseoverviewDto extends PartialType(CreateCourseoverviewDto) {}

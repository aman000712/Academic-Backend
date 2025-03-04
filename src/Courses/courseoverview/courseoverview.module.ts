import { Module } from '@nestjs/common';
import { CourseoverviewService } from './courseoverview.service';
import { CourseoverviewController } from './courseoverview.controller';

@Module({
  controllers: [CourseoverviewController],
  providers: [CourseoverviewService],
})
export class CourseoverviewModule {}

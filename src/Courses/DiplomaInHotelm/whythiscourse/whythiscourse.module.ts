import { Module } from '@nestjs/common';
import { WhythiscourseService } from './whythiscourse.service';
import { WhythiscourseController } from './whythiscourse.controller';

@Module({
  controllers: [WhythiscourseController],
  providers: [WhythiscourseService],
})
export class WhythiscourseModule {}

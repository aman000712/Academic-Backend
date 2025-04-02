import { Module } from '@nestjs/common';
import { WhythiscourseService } from './whythiscourse.service';
import { WhythiscourseController } from './whythiscourse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Whythiscourse } from './entities/whythiscourse.entity';

@Module({

  imports:[

    TypeOrmModule.forFeature([
      Whythiscourse,
    ]),


    
  ],



  controllers: [WhythiscourseController],
  providers: [WhythiscourseService],
})
export class WhythiscourseModule {}

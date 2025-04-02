import { Module } from '@nestjs/common';
import { NoticestitleService } from './noticestitle.service';
import { NoticestitleController } from './noticestitle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticestitle } from './entities/noticestitle.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Noticestitle,

    ])

  ],


  controllers: [NoticestitleController],
  providers: [NoticestitleService],
})
export class NoticestitleModule {}

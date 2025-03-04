import { Module } from '@nestjs/common';
import { TopprogramsService } from './topprograms.service';
import { TopprogramsController } from './topprograms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topprogram } from './entities/topprogram.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Topprogram,
      Fileupload,
    ])
  ],



  controllers: [TopprogramsController],
  providers: [TopprogramsService],
})
export class TopprogramsModule {}

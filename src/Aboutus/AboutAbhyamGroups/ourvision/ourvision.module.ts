import { Module } from '@nestjs/common';
import { OurvisionService } from './ourvision.service';
import { OurvisionController } from './ourvision.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ourvision } from './entities/ourvision.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Ourvision,
      Fileupload,
    ])
  ],




  controllers: [OurvisionController],
  providers: [OurvisionService],
})
export class OurvisionModule {}

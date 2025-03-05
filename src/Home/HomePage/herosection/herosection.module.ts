import { Module } from '@nestjs/common';
import { HerosectionService } from './herosection.service';
import { HerosectionController } from './herosection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Herosection } from './entities/herosection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Herosection,
      Fileupload,
    ])
  ],




  controllers: [HerosectionController],
  providers: [HerosectionService],
})
export class HerosectionModule {}

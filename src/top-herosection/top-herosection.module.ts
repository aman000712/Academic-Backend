import { Module } from '@nestjs/common';
import { TopHerosectionService } from './top-herosection.service';
import { TopHerosectionController } from './top-herosection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopHerosection } from './entities/top-herosection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      TopHerosection,
      Fileupload
    ]),


  ],



  controllers: [TopHerosectionController],
  providers: [TopHerosectionService],
})
export class TopHerosectionModule {}

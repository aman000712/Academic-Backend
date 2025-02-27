import { Module } from '@nestjs/common';
import { HerosectionService } from './herosection.service';
import { HerosectionController } from './herosection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Herosection } from './entities/herosection.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Herosection,
    ])
  ],




  controllers: [HerosectionController],
  providers: [HerosectionService],
})
export class HerosectionModule {}

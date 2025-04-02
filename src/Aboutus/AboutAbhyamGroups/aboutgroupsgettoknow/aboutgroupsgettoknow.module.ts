import { Module } from '@nestjs/common';
import { AboutgroupsgettoknowService } from './aboutgroupsgettoknow.service';
import { AboutgroupsgettoknowController } from './aboutgroupsgettoknow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutgroupsgettoknow } from './entities/aboutgroupsgettoknow.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Aboutgroupsgettoknow
    ])
  ],



  controllers: [AboutgroupsgettoknowController],
  providers: [AboutgroupsgettoknowService],
})
export class AboutgroupsgettoknowModule {}

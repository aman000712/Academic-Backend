import { Module } from '@nestjs/common';
import { AboutusgroupService } from './aboutusgroup.service';
import { AboutusgroupController } from './aboutusgroup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusgroup } from './entities/aboutusgroup.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Aboutusgroup
    ]),


  ],





  controllers: [AboutusgroupController],
  providers: [AboutusgroupService],
})
export class AboutusgroupModule {}

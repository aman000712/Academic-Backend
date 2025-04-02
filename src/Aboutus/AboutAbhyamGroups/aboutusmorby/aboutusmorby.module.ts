import { Module } from '@nestjs/common';
import { AboutusmorbyService } from './aboutusmorby.service';
import { AboutusmorbyController } from './aboutusmorby.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusmorby } from './entities/aboutusmorby.entity';

@Module({


  imports: [


    TypeOrmModule.forFeature([
      Aboutusmorby

    ]),


  ],



  controllers: [AboutusmorbyController],
  providers: [AboutusmorbyService],
})
export class AboutusmorbyModule {}

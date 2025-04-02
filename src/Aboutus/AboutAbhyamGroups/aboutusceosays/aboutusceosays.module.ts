import { Module } from '@nestjs/common';
import { AboutusceosaysService } from './aboutusceosays.service';
import { AboutusceosaysController } from './aboutusceosays.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusceosay } from './entities/aboutusceosay.entity';

@Module({

  imports: [


    TypeOrmModule.forFeature([
      Aboutusceosay,
    ])



  ],




  controllers: [AboutusceosaysController],
  providers: [AboutusceosaysService],
})
export class AboutusceosaysModule {}

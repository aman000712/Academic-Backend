import { Module } from '@nestjs/common';
import { AboutsectionService } from './aboutsection.service';
import { AboutsectionController } from './aboutsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutsection } from './entities/aboutsection.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Aboutsection,

    ]),
  ],


  controllers: [AboutsectionController],
  providers: [AboutsectionService],
})
export class AboutsectionModule {}

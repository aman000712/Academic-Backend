import { Module } from '@nestjs/common';
import { HerotestinomialssectionService } from './herotestinomialssection.service';
import { HerotestinomialssectionController } from './herotestinomialssection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';
import { Herotestinomialssection } from './entities/herotestinomialssection.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Herotestinomialssection,
      Fileupload

    ]),
  ],



  controllers: [HerotestinomialssectionController],
  providers: [HerotestinomialssectionService],
})
export class HerotestinomialssectionModule {}

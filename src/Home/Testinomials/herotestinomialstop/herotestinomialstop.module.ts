import { Module } from '@nestjs/common';
import { HerotestinomialstopService } from './herotestinomialstop.service';
import { HerotestinomialstopController } from './herotestinomialstop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Herotestinomialstop } from './entities/herotestinomialstop.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Herotestinomialstop
    ]),
  ],


  controllers: [HerotestinomialstopController],
  providers: [HerotestinomialstopService],
})
export class HerotestinomialstopModule {}

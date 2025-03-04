import { Module } from '@nestjs/common';
import { TestinomialstopService } from './testinomialstop.service';
import { TestinomialstopController } from './testinomialstop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testinomialstop } from './entities/testinomialstop.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Testinomialstop
    ]),

  ],


  controllers: [TestinomialstopController],
  providers: [TestinomialstopService],
})
export class TestinomialstopModule { }

import { Module } from '@nestjs/common';
import { EligibilityrelevantquestionsService } from './eligibilityrelevantquestions.service';
import { EligibilityrelevantquestionsController } from './eligibilityrelevantquestions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eligibilityrelevantquestion } from './entities/eligibilityrelevantquestion.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      
      Eligibilityrelevantquestion

    ]),
  ],



  controllers: [EligibilityrelevantquestionsController],
  providers: [EligibilityrelevantquestionsService],
})
export class EligibilityrelevantquestionsModule {}

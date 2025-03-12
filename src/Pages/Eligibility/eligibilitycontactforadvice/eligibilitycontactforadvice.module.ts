import { Module } from '@nestjs/common';
import { EligibilitycontactforadviceService } from './eligibilitycontactforadvice.service';
import { EligibilitycontactforadviceController } from './eligibilitycontactforadvice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eligibilitycontactforadvice } from './entities/eligibilitycontactforadvice.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Eligibilitycontactforadvice
    ])
  ],


  controllers: [EligibilitycontactforadviceController],
  providers: [EligibilitycontactforadviceService],
})
export class EligibilitycontactforadviceModule {}

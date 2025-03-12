import { Module } from '@nestjs/common';
import { EligibilitycontactinfoService } from './eligibilitycontactinfo.service';
import { EligibilitycontactinfoController } from './eligibilitycontactinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eligibilitycontactinfo } from './entities/eligibilitycontactinfo.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Eligibilitycontactinfo
    ])
  ],


  controllers: [EligibilitycontactinfoController],
  providers: [EligibilitycontactinfoService],
})
export class EligibilitycontactinfoModule {}

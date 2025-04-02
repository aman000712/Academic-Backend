import { Module } from '@nestjs/common';
import { EligibilityherosectionService } from './eligibilityherosection.service';
import { EligibilityherosectionController } from './eligibilityherosection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eligibilityherosection } from './entities/eligibilityherosection.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Eligibilityherosection,
      Fileupload
    ]),

  ],



  controllers: [EligibilityherosectionController],
  providers: [EligibilityherosectionService],
})
export class EligibilityherosectionModule {}

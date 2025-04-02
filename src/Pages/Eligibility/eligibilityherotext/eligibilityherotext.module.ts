import { Module } from '@nestjs/common';
import { EligibilityherotextService } from './eligibilityherotext.service';
import { EligibilityherotextController } from './eligibilityherotext.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eligibilityherotext } from './entities/eligibilityherotext.entity';

@Module({


  imports:[
    TypeOrmModule.forFeature([
      Eligibilityherotext,
    ])
  ],

  controllers: [EligibilityherotextController],
  providers: [EligibilityherotextService],
})
export class EligibilityherotextModule {}

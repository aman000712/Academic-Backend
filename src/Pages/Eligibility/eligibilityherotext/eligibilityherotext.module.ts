import { Module } from '@nestjs/common';
import { EligibilityherotextService } from './eligibilityherotext.service';
import { EligibilityherotextController } from './eligibilityherotext.controller';

@Module({
  controllers: [EligibilityherotextController],
  providers: [EligibilityherotextService],
})
export class EligibilityherotextModule {}

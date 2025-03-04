import { Module } from '@nestjs/common';
import { FrequentlyaskedService } from './frequentlyasked.service';
import { FrequentlyaskedController } from './frequentlyasked.controller';

@Module({
  controllers: [FrequentlyaskedController],
  providers: [FrequentlyaskedService],
})
export class FrequentlyaskedModule {}

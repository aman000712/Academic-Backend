import { Module } from '@nestjs/common';
import { FrequentlyaskedtopicsService } from './frequentlyaskedtopics.service';
import { FrequentlyaskedtopicsController } from './frequentlyaskedtopics.controller';

@Module({
  controllers: [FrequentlyaskedtopicsController],
  providers: [FrequentlyaskedtopicsService],
})
export class FrequentlyaskedtopicsModule {}

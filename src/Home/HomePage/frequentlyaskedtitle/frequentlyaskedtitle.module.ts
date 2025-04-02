import { Module } from '@nestjs/common';
import { FrequentlyaskedtitleService } from './frequentlyaskedtitle.service';
import { FrequentlyaskedtitleController } from './frequentlyaskedtitle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frequentlyaskedtitle } from './entities/frequentlyaskedtitle.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Frequentlyaskedtitle
    ])
  ],



  controllers: [FrequentlyaskedtitleController],
  providers: [FrequentlyaskedtitleService],
})
export class FrequentlyaskedtitleModule {}

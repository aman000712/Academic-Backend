import { Module } from '@nestjs/common';
import { InquirysectionService } from './inquirysection.service';
import { InquirysectionController } from './inquirysection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inquirysection } from './entities/inquirysection.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Inquirysection
    ]),

  ],


  controllers: [InquirysectionController],
  providers: [InquirysectionService],
})
export class InquirysectionModule {}

import { Module } from '@nestjs/common';
import { TopstudenttestimonialsService } from './topstudenttestimonials.service';
import { TopstudenttestimonialsController } from './topstudenttestimonials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topstudenttestimonial } from './entities/topstudenttestimonial.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Topstudenttestimonial
    ]),
  ],


  controllers: [TopstudenttestimonialsController],
  providers: [TopstudenttestimonialsService],
})
export class TopstudenttestimonialsModule {}

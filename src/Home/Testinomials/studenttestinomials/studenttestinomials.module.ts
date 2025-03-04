import { Module } from '@nestjs/common';
import { StudenttestinomialsService } from './studenttestinomials.service';
import { StudenttestinomialsController } from './studenttestinomials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studenttestinomial } from './entities/studenttestinomial.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Studenttestinomial,
      Fileupload
    ])
  ],



  controllers: [StudenttestinomialsController],
  providers: [StudenttestinomialsService],
})
export class StudenttestinomialsModule {}

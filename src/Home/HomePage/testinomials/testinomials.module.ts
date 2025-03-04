import { Module } from '@nestjs/common';
import { TestinomialsService } from './testinomials.service';
import { TestinomialsController } from './testinomials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testinomial } from './entities/testinomial.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Testinomial,
      Fileupload
    ])
  ],


  controllers: [TestinomialsController],
  providers: [TestinomialsService],
})
export class TestinomialsModule {}

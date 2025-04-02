import { Module } from '@nestjs/common';
import { TheplpService } from './theplp.service';
import { TheplpController } from './theplp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theplp } from './entities/theplp.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Theplp,
      Fileupload,
    ])


  ],



  controllers: [TheplpController],
  providers: [TheplpService],
})
export class TheplpModule {}

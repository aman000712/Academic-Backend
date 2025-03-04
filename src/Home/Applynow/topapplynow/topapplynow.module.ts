import { Module } from '@nestjs/common';
import { TopapplynowService } from './topapplynow.service';
import { TopapplynowController } from './topapplynow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topapplynow } from './entities/topapplynow.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Topapplynow,
      Fileupload
    ]),
  ],


  controllers: [TopapplynowController],
  providers: [TopapplynowService],
})
export class TopapplynowModule {}

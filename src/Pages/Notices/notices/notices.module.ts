import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Notice,
      Fileupload
    ])
  ],


  controllers: [NoticesController],
  providers: [NoticesService],
})
export class NoticesModule {}

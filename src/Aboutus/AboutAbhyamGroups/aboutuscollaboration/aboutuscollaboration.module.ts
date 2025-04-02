import { Module } from '@nestjs/common';
import { AboutuscollaborationService } from './aboutuscollaboration.service';
import { AboutuscollaborationController } from './aboutuscollaboration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutuscollaboration } from './entities/aboutuscollaboration.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Aboutuscollaboration,
      Fileupload,
    ]),
  ],



  controllers: [AboutuscollaborationController],
  providers: [AboutuscollaborationService],
})
export class AboutuscollaborationModule {}

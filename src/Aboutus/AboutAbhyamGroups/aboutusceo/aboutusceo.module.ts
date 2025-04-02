import { Module } from '@nestjs/common';
import { AboutusceoService } from './aboutusceo.service';
import { AboutusceoController } from './aboutusceo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusceo } from './entities/aboutusceo.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Aboutusceo,
      Fileupload
    ]),


  ],





  controllers: [AboutusceoController],
  providers: [AboutusceoService],
})
export class AboutusceoModule {}

import { Module } from '@nestjs/common';
import { OurpartnerslogosService } from './ourpartnerslogos.service';
import { OurpartnerslogosController } from './ourpartnerslogos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';
import { Ourpartnerslogo } from './entities/ourpartnerslogo.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Ourpartnerslogo,
      Fileupload
    ]),
  ],



  controllers: [OurpartnerslogosController],
  providers: [OurpartnerslogosService],
})
export class OurpartnerslogosModule {}

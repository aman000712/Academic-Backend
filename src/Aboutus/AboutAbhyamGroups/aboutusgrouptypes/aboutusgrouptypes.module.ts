import { Module } from '@nestjs/common';
import { AboutusgrouptypesService } from './aboutusgrouptypes.service';
import { AboutusgrouptypesController } from './aboutusgrouptypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusgrouptype } from './entities/aboutusgrouptype.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Aboutusgrouptype,
      Fileupload
    ])


  ],



  controllers: [AboutusgrouptypesController],
  providers: [AboutusgrouptypesService],
})
export class AboutusgrouptypesModule {}

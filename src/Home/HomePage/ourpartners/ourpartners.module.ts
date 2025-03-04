import { Module } from '@nestjs/common';
import { OurpartnersService } from './ourpartners.service';
import { OurpartnersController } from './ourpartners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ourpartner } from './entities/ourpartner.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Ourpartner,
      Fileupload,
    ])

  ],


  controllers: [OurpartnersController],
  providers: [OurpartnersService],
})
export class OurpartnersModule {}

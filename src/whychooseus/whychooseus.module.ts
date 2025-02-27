import { Module } from '@nestjs/common';
import { WhychooseusService } from './whychooseus.service';
import { WhychooseusController } from './whychooseus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Whychooseus } from './entities/whychooseus.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Whychooseus,
      Fileupload
    ]),


  ],


  controllers: [WhychooseusController],
  providers: [WhychooseusService],
})
export class WhychooseusModule { }

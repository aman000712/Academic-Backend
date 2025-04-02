import { Module } from '@nestjs/common';
import { AboutusteamsService } from './aboutusteams.service';
import { AboutusteamsController } from './aboutusteams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusteam } from './entities/aboutusteam.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [


    TypeOrmModule.forFeature([
      Aboutusteam,
      Fileupload
    ])

  ],



  controllers: [AboutusteamsController],
  providers: [AboutusteamsService],
})
export class AboutusteamsModule {}

import { Module } from '@nestjs/common';
import { AboutusmilestoneService } from './aboutusmilestone.service';
import { AboutusmilestoneController } from './aboutusmilestone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aboutusmilestone } from './entities/aboutusmilestone.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Aboutusmilestone,
      Fileupload
    ])


  ],



  controllers: [AboutusmilestoneController],
  providers: [AboutusmilestoneService],
})
export class AboutusmilestoneModule {}

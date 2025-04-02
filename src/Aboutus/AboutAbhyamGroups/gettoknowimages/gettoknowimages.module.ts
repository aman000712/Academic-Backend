import { Module } from '@nestjs/common';
import { GettoknowimagesService } from './gettoknowimages.service';
import { GettoknowimagesController } from './gettoknowimages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gettoknowimage } from './entities/gettoknowimage.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Gettoknowimage,
      Fileupload,
    ])


  ],
  
  
  
  
  controllers: [GettoknowimagesController],
  providers: [GettoknowimagesService],
})
export class GettoknowimagesModule {}

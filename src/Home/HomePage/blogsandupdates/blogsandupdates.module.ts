import { Module } from '@nestjs/common';
import { BlogsandupdatesService } from './blogsandupdates.service';
import { BlogsandupdatesController } from './blogsandupdates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';
import { Blogsandupdate } from './entities/blogsandupdate.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Blogsandupdate,
      Fileupload

    ]),


  ],




  controllers: [BlogsandupdatesController],
  providers: [BlogsandupdatesService],
})
export class BlogsandupdatesModule { }

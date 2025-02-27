import { Module } from '@nestjs/common';
import { PopularcoursesService } from './popularcourses.service';
import { PopularcoursesController } from './popularcourses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Popularcourse } from './entities/popularcourse.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Popularcourse,
      Fileupload
    ])



  ],



  controllers: [PopularcoursesController],
  providers: [PopularcoursesService],
})
export class PopularcoursesModule { }

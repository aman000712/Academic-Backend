import { Module } from '@nestjs/common';
import { TakeactionnowService } from './takeactionnow.service';
import { TakeactionnowController } from './takeactionnow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Takeactionnow } from './entities/takeactionnow.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Takeactionnow,
      Fileupload
    ])


  ],


  controllers: [TakeactionnowController],
  providers: [TakeactionnowService],
})
export class TakeactionnowModule {}

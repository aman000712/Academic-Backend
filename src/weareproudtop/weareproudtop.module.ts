import { Module } from '@nestjs/common';
import { WeareproudtopService } from './weareproudtop.service';
import { WeareproudtopController } from './weareproudtop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weareproudtop } from './entities/weareproudtop.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([
      Weareproudtop
    ]),


  ],



  controllers: [WeareproudtopController],
  providers: [WeareproudtopService],
})
export class WeareproudtopModule {}

import { Module } from '@nestjs/common';
import { PopularcoursestopService } from './popularcoursestop.service';
import { PopularcoursestopController } from './popularcoursestop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Popularcoursestop } from './entities/popularcoursestop.entity';

@Module({


  imports: [

    TypeOrmModule.forFeature([
      Popularcoursestop

    ]),

  ],


  controllers: [PopularcoursestopController],
  providers: [PopularcoursestopService],
})
export class PopularcoursestopModule {}

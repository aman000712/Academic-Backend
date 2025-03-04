import { Module } from '@nestjs/common';
import { WhychooseustopService } from './whychooseustop.service';
import { WhychooseustopController } from './whychooseustop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Whychooseustop } from './entities/whychooseustop.entity';

@Module({


  imports : [

    TypeOrmModule.forFeature([
      Whychooseustop,
    ])

  ],

  controllers: [WhychooseustopController],
  providers: [WhychooseustopService],
})
export class WhychooseustopModule {}

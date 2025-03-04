import { Module } from '@nestjs/common';
import { MilestonesectionService } from './milestonesection.service';
import { MilestonesectionController } from './milestonesection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Milestonesection } from './entities/milestonesection.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Milestonesection

    ]),
  ],



  controllers: [MilestonesectionController],
  providers: [MilestonesectionService],
})
export class MilestonesectionModule {}

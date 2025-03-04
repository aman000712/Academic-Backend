import { Module } from '@nestjs/common';
import { BlogandupdatestopService } from './blogandupdatestop.service';
import { BlogandupdatestopController } from './blogandupdatestop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogandupdatestop } from './entities/blogandupdatestop.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Blogandupdatestop,
    ])
  ],


  controllers: [BlogandupdatestopController],
  providers: [BlogandupdatestopService],
})
export class BlogandupdatestopModule {}

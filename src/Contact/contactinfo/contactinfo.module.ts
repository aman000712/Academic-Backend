import { Module } from '@nestjs/common';
import { ContactinfoService } from './contactinfo.service';
import { ContactinfoController } from './contactinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contactinfo } from './entities/contactinfo.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Contactinfo
    ])
  ],


  controllers: [ContactinfoController],
  providers: [ContactinfoService],
})
export class ContactinfoModule {}

import { Module } from '@nestjs/common';
import { CompanylogoService } from './companylogo.service';
import { CompanylogoController } from './companylogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companylogo } from './entities/companylogo.entity';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Companylogo,
      Fileupload
    ])
  ],


  controllers: [CompanylogoController],
  providers: [CompanylogoService],
})
export class CompanylogoModule {}

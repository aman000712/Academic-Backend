import { Module } from '@nestjs/common';
import { DiplomainhotelmtopService } from './diplomainhotelmtop.service';
import { DiplomainhotelmtopController } from './diplomainhotelmtop.controller';

@Module({
  controllers: [DiplomainhotelmtopController],
  providers: [DiplomainhotelmtopService],
})
export class DiplomainhotelmtopModule {}

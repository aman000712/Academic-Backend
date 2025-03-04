import { PartialType } from '@nestjs/swagger';
import { CreateDiplomainhotelmtopDto } from './create-diplomainhotelmtop.dto';

export class UpdateDiplomainhotelmtopDto extends PartialType(CreateDiplomainhotelmtopDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAboutusgrouptypeDto } from './create-aboutusgrouptype.dto';

export class UpdateAboutusgrouptypeDto extends PartialType(CreateAboutusgrouptypeDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAboutusmorbyDto } from './create-aboutusmorby.dto';

export class UpdateAboutusmorbyDto extends PartialType(CreateAboutusmorbyDto) {}

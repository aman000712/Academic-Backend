import { PartialType } from '@nestjs/swagger';
import { CreateAboutusceosayDto } from './create-aboutusceosay.dto';

export class UpdateAboutusceosayDto extends PartialType(CreateAboutusceosayDto) {}

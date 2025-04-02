import { PartialType } from '@nestjs/swagger';
import { CreateAboutusteamDto } from './create-aboutusteam.dto';

export class UpdateAboutusteamDto extends PartialType(CreateAboutusteamDto) {}

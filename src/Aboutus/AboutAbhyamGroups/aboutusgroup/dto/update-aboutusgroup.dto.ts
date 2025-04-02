import { PartialType } from '@nestjs/swagger';
import { CreateAboutusgroupDto } from './create-aboutusgroup.dto';

export class UpdateAboutusgroupDto extends PartialType(CreateAboutusgroupDto) {}

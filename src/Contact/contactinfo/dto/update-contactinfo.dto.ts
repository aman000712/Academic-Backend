import { PartialType } from '@nestjs/swagger';
import { CreateContactinfoDto } from './create-contactinfo.dto';

export class UpdateContactinfoDto extends PartialType(CreateContactinfoDto) {}

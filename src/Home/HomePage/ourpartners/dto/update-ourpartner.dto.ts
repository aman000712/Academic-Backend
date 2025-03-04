import { PartialType } from '@nestjs/swagger';
import { CreateOurpartnerDto } from './create-ourpartner.dto';

export class UpdateOurpartnerDto extends PartialType(CreateOurpartnerDto) {}

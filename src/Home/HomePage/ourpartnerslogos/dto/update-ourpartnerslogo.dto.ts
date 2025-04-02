import { PartialType } from '@nestjs/swagger';
import { CreateOurpartnerslogoDto } from './create-ourpartnerslogo.dto';

export class UpdateOurpartnerslogoDto extends PartialType(CreateOurpartnerslogoDto) {}

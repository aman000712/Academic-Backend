import { PartialType } from '@nestjs/swagger';
import { CreateTopapplynowDto } from './create-topapplynow.dto';

export class UpdateTopapplynowDto extends PartialType(CreateTopapplynowDto) {}

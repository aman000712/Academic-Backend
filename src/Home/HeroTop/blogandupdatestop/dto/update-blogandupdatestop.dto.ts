import { PartialType } from '@nestjs/swagger';
import { CreateBlogandupdatestopDto } from './create-blogandupdatestop.dto';

export class UpdateBlogandupdatestopDto extends PartialType(CreateBlogandupdatestopDto) {}

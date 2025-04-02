import { PartialType } from '@nestjs/swagger';
import { CreateImageuploadDto } from './create-imageupload.dto';

export class UpdateImageuploadDto extends PartialType(CreateImageuploadDto) {}

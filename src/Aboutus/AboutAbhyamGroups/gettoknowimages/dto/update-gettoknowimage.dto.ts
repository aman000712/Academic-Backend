import { PartialType } from '@nestjs/swagger';
import { CreateGettoknowimageDto } from './create-gettoknowimage.dto';

export class UpdateGettoknowimageDto extends PartialType(CreateGettoknowimageDto) {}

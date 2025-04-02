import { PartialType } from '@nestjs/swagger';
import { CreateAboutusceoDto } from './create-aboutusceo.dto';

export class UpdateAboutusceoDto extends PartialType(CreateAboutusceoDto) {}

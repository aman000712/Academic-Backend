import { PartialType } from '@nestjs/swagger';
import { CreateCompanylogoDto } from './create-companylogo.dto';

export class UpdateCompanylogoDto extends PartialType(CreateCompanylogoDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateBlogsandupdateDto } from './create-blogsandupdate.dto';

export class UpdateBlogsandupdateDto extends PartialType(CreateBlogsandupdateDto) {}

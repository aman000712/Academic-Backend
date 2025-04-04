import { PartialType } from '@nestjs/swagger';
import { CreateBlogcategoryDto } from './create-blogcategory.dto';

export class UpdateBlogcategoryDto extends PartialType(CreateBlogcategoryDto) {}

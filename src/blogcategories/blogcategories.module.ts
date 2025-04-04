import { Module } from '@nestjs/common';
import { BlogcategoriesService } from './blogcategories.service';
import { BlogcategoriesController } from './blogcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogcategory } from './entities/blogcategory.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Blogcategory
    ])
  ],


  controllers: [BlogcategoriesController],
  providers: [BlogcategoriesService],
})
export class BlogcategoriesModule {}

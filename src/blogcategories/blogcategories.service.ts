import { Injectable } from '@nestjs/common';
import { CreateBlogcategoryDto } from './dto/create-blogcategory.dto';
import { UpdateBlogcategoryDto } from './dto/update-blogcategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogcategory } from './entities/blogcategory.entity';

@Injectable()
export class BlogcategoriesService {

  constructor(
    @InjectRepository(Blogcategory) private readonly blogcategoryRepository: Repository<Blogcategory>
  ) { }


  async create(createBlogcategoryDto: CreateBlogcategoryDto) {

    const category = this.blogcategoryRepository.create(createBlogcategoryDto);
    return this.blogcategoryRepository.save(category);
  }

  async findAll() {
    return this.blogcategoryRepository.find();
  }

  async findOne(id: number) {
    return this.blogcategoryRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateBlogcategoryDto: UpdateBlogcategoryDto) {
    const category = await this.blogcategoryRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new Error('Category not found');
    }

    Object.assign(category, updateBlogcategoryDto);
    return this.blogcategoryRepository.save(category);
  }

  async remove(id: number) {
    const category = await this.blogcategoryRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new Error('Category not found');
    }

    return this.blogcategoryRepository.remove(category);
  }
}

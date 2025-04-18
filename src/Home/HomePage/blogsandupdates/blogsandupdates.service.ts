import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogsandupdateDto } from './dto/create-blogsandupdate.dto';
import { UpdateBlogsandupdateDto } from './dto/update-blogsandupdate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogsandupdate } from './entities/blogsandupdate.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';
import { Blogcategory } from 'src/blogcategories/entities/blogcategory.entity';

@Injectable()
export class BlogsandupdatesService {


  constructor(

    @InjectRepository(Blogsandupdate) private readonly blogsandupdateRepository: Repository<Blogsandupdate>,

  ) { }



  async create(createBlogsandupdateDto: CreateBlogsandupdateDto) {

    const blogsandupdate = this.blogsandupdateRepository.create(createBlogsandupdateDto);

    if (createBlogsandupdateDto.categoryStatusid) {
      const category = await this.blogsandupdateRepository.manager.findOne(
        Blogcategory, {
        where: {
          id: createBlogsandupdateDto.categoryStatusid
        }
      }
      );
      if (!category) {
        throw new Error('category not found')
      }
      blogsandupdate.categoryStatus = category
    }





    if (blogsandupdate.blogimageid) {
      const blogimageid = await this.blogsandupdateRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createBlogsandupdateDto.blogimageid
        }
      }
      );
      if (!blogimageid) {
        throw new Error('blogimage not found')
      }
    }
    return this.blogsandupdateRepository.save(blogsandupdate);

  }


  async findAll() {
    return await this.blogsandupdateRepository.find({
      relations: ['blogimageid', 'categoryStatus'],
    });
  }

  async findOne(id: number) {
    return this.blogsandupdateRepository.findOne({
      where: {
        id: id
      },
      relations: ['blogimageid'],
    });
  }

  async findByStatus(status: string) {
    return await this.blogsandupdateRepository.find({
      relations: ['blogimageid', 'category'],
    });
  }

  async update(id: number, updateBlogsandupdateDto: UpdateBlogsandupdateDto) {

    const blogsandupdate = await this.blogsandupdateRepository.findOne({
      where: {
        id: id
      }
    });

    if (!blogsandupdate) {
      throw new NotFoundException('blogsandupdate not found');
    }

    Object.assign(blogsandupdate, updateBlogsandupdateDto);


    return this.blogsandupdateRepository.save(blogsandupdate);
  }

  remove(id: number) {
    return this.blogsandupdateRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBlogsandupdateDto } from './dto/create-blogsandupdate.dto';
import { UpdateBlogsandupdateDto } from './dto/update-blogsandupdate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogsandupdate } from './entities/blogsandupdate.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class BlogsandupdatesService {


  constructor(

    @InjectRepository(Blogsandupdate) private readonly blogsandupdateRepository: Repository<Blogsandupdate>,

  ) { }



  async create(createBlogsandupdateDto: CreateBlogsandupdateDto) {

    const blogsandupdate = this.blogsandupdateRepository.create(createBlogsandupdateDto);

    if (blogsandupdate.blogimage) {
      const blogimage = await this.blogsandupdateRepository.manager.findOne(
        Fileupload, {
        where: {
          id: createBlogsandupdateDto.blogimage
        }
      }
      );
      if (!blogimage) {
        throw new Error('blogimage not found')
      }
    }
    return this.blogsandupdateRepository.save(blogsandupdate);

  }

  async findAll() {
    return await this.blogsandupdateRepository.find({
      relations: ['blogimage'],
    });
  }

  async findOne(id: number) {
    return this.blogsandupdateRepository.findOne({
      where: {
        id: id
      },
      relations: ['blogimage'],
    });
  }

  async update(id: number, updateBlogsandupdateDto: UpdateBlogsandupdateDto) {

    const blogsandupdate = await this.blogsandupdateRepository.findOne({
      where: {
        id: id
      }
    });

    if (!blogsandupdate) {
      throw new Error('blogsandupdate not found');
    }

    Object.assign(blogsandupdate, updateBlogsandupdateDto);


    return this.blogsandupdateRepository.save(blogsandupdate);
  }

  remove(id: number) {
    return this.blogsandupdateRepository.delete(id);
  }
}

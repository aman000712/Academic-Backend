import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class NoticesService {


  constructor(
    @InjectRepository(Notice) private readonly noticeRepository: Repository<Notice>,
  ) { }



  async create(createNoticeDto: CreateNoticeDto) {

    if (createNoticeDto.imageid) {
      const imageid = await this.noticeRepository.manager.findOne(
        Fileupload, { where: { id: createNoticeDto.imageid } }
      );
      if (!imageid) {
        throw new NotFoundException('Imageid not found');
      }
    }


    const notice = this.noticeRepository.create(createNoticeDto);



    return this.noticeRepository.save(notice);
  }

  async findAll() {
    return this.noticeRepository.find({
      relations: ['imageid']
    });
  }

  async findOne(id: number) {
    return this.noticeRepository.findOne({
      where: { id: id },
      relations: ['imageid']
    });
  }

  async update(id: number, updateNoticeDto: UpdateNoticeDto) {

    const notice = await this.noticeRepository.findOne({ where: { id: id } });
    if (!notice) {
      throw new NotFoundException('Notice not found');
    }

    if (updateNoticeDto.imageid) {
      const imageid = await this.noticeRepository.manager.findOne(
        Fileupload, { where: { id: updateNoticeDto.imageid } }
      );
      if (!imageid) {
        throw new NotFoundException('Imageid not found');
      }
    }

    Object.assign(notice, updateNoticeDto);


    return this.noticeRepository.save(notice);
  }

  remove(id: number) {
    return this.noticeRepository.delete(id);
  }
}

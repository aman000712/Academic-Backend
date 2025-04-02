import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGettoknowimageDto } from './dto/create-gettoknowimage.dto';
import { UpdateGettoknowimageDto } from './dto/update-gettoknowimage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gettoknowimage } from './entities/gettoknowimage.entity';
import { In, Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class GettoknowimagesService {

  constructor(
    @InjectRepository(Gettoknowimage) private readonly gettoknowimageRepository: Repository<Gettoknowimage>,
  ) { }


  async create(createGettoknowimageDto: CreateGettoknowimageDto) {


    const images = await this.gettoknowimageRepository.manager.find(Fileupload, {
      where: {
        id: In(createGettoknowimageDto.imageid)
      }
    })

    if (images.length != createGettoknowimageDto.imageid.length) {
      throw new BadRequestException("imageid not found");
    }

    const gettoknowimage = this.gettoknowimageRepository.create({
      ...createGettoknowimageDto,
      imageid: images
    });



    return this.gettoknowimageRepository.save(gettoknowimage);
  }

  async findAll() {
    return this.gettoknowimageRepository.find({
      relations: ['imageid']
    });
  }

  async update(id: number, updateGettoknowimageDto: UpdateGettoknowimageDto) {

    const gettoknowimage = await this.gettoknowimageRepository.findOne({ where: { id: id } });
    if (!gettoknowimage) {
      throw new BadRequestException('gettoknowimage not found');
    }

    if (updateGettoknowimageDto.imageid?.length) {
      const images = await this.gettoknowimageRepository.manager.find(Fileupload, {
        where: {
          id: In(updateGettoknowimageDto.imageid)
        }
      })

      if (images.length != updateGettoknowimageDto.imageid.length) {
        throw new BadRequestException("imageid not found");
      }
      gettoknowimage.imageid = images
    }



    return this.gettoknowimageRepository.save(gettoknowimage);
  }

  remove(id: number) {
    return this.gettoknowimageRepository.delete(id);
  }
}

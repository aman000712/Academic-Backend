import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOurpartnerDto } from './dto/create-ourpartner.dto';
import { UpdateOurpartnerDto } from './dto/update-ourpartner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ourpartner } from './entities/ourpartner.entity';
import { In, Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class OurpartnersService {
  constructor(
    @InjectRepository(Ourpartner) private readonly ourpartnerRepository: Repository<Ourpartner>,
  ) { }





  async create(createOurpartnerDto: CreateOurpartnerDto) {
    

    const existingOurpartner = await this.ourpartnerRepository.findOne({ where: {} });
    if (existingOurpartner) {
      throw new BadRequestException('Only one Ourpartner record is allowed. Use update instead.');
    }

    // Fetch images based on provided IDs
    const logoImages = await this.ourpartnerRepository.manager.find(Fileupload, {
      where: { id: In(createOurpartnerDto.logoimageid) },
    });

    if (logoImages.length !== createOurpartnerDto.logoimageid.length) {
      throw new NotFoundException('Some images were not found');
    }

    // Create Ourpartner with associated images
    const ourpartner = this.ourpartnerRepository.create({
      ...createOurpartnerDto,
      logoimageid: logoImages,
    });

    return this.ourpartnerRepository.save(ourpartner);





  }














  // async create(createOurpartnerDto: CreateOurpartnerDto) {

  //   const existingOurpartner = await this.ourpartnerRepository.findOne({where:{}});
  //   if (existingOurpartner) {
  //     throw new BadRequestException('Only one Ourpartner record is allowed. Use update instead.');
  //   }
  //   if (createOurpartnerDto.logoimageid) {
  //     const logoimageid = await this.ourpartnerRepository.manager.findOne(
  //       Fileupload, {
  //       where: {
  //         id: createOurpartnerDto.logoimageid
  //       }
  //     }
  //     );
  //     if (!logoimageid) {
  //       throw new NotFoundException('Image not found');
  //     }
  //   }


  //   const ourpartner = this.ourpartnerRepository.create(createOurpartnerDto);
  //   return this.ourpartnerRepository.save(ourpartner);
  // }


  async findAll() {
    return await this.ourpartnerRepository.find({
      relations: ['logoimageid'],
    });
  }


  async findOne(id: number) {
    return await this.ourpartnerRepository.findOne({
      where: {
        id: id,
      },
      relations: ['logoimageid']
    });
  }

  async update(id: number, updateOurpartnerDto: UpdateOurpartnerDto) {

    const ourpartner = await this.ourpartnerRepository.findOne({
      where: { id },
      relations: ['logoimageid'],
    });

    if (!ourpartner) {
      throw new NotFoundException('Ourpartner not found');
    }

    if (updateOurpartnerDto.logoimageid && updateOurpartnerDto.logoimageid.length > 0) {
      const logoImages = await this.ourpartnerRepository.manager.find(Fileupload, {
        where: { id: In(updateOurpartnerDto.logoimageid) },
      });

      if (logoImages.length !== updateOurpartnerDto.logoimageid.length) {
        throw new NotFoundException('Some images were not found');
      }

      ourpartner.logoimageid = logoImages;
    }

    Object.assign(ourpartner, updateOurpartnerDto);
    return this.ourpartnerRepository.save(ourpartner);
  }

}

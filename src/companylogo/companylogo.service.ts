import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanylogoDto } from './dto/create-companylogo.dto';
import { UpdateCompanylogoDto } from './dto/update-companylogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Companylogo } from './entities/companylogo.entity';
import { Repository } from 'typeorm';
import { Fileupload } from 'src/fileupload/entities/fileupload.entity';

@Injectable()
export class CompanylogoService {


  constructor(
    @InjectRepository(Companylogo) private readonly companylogoRepository: Repository<Companylogo>,
  ) { }


  async create(createCompanylogoDto: CreateCompanylogoDto) {

    const datas = await this.companylogoRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('companylogo already exists');
    }

    if (createCompanylogoDto.logo) {
      const logo = await this.companylogoRepository.manager.findOne(Fileupload, {
        where: { id: createCompanylogoDto.logo }
      });
      if (!logo) {
        throw new BadRequestException('logo not found');
      }
      createCompanylogoDto.logo = logo;
    }


    const companylogo = this.companylogoRepository.create(createCompanylogoDto);



    return this.companylogoRepository.save(companylogo);
  }

  async findAll() {
    return this.companylogoRepository.find({
      relations: ['logo'],
    });
  }

  async update(id: number, updateCompanylogoDto: UpdateCompanylogoDto) {

    const companylogo = await this.companylogoRepository.findOne({ where: { id: id } });
    if (!companylogo) {
      throw new BadRequestException('companylogo not found');
    }

    Object.assign(companylogo, updateCompanylogoDto);



    return this.companylogoRepository.save(companylogo);
  }

  remove(id: number) {
    return this.companylogoRepository.delete(id);
  }
}
